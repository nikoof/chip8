mod chip8;
mod instruction;
mod superchip;

use anyhow::Result;
use instruction::Instruction;
use std::time;

pub use chip8::Chip8;
pub use superchip::Superchip;

pub trait Interpreter {
    fn display(&self) -> Vec<&[u8]>;

    fn update_timers(&mut self);
    fn next_instruction(&mut self) -> Result<Instruction>;
    fn execute_instruction(
        &mut self,
        instruction: Instruction,
        keys_pressed: &[bool; 16],
        keys_released: &[bool; 16],
    ) -> Result<()>;

    fn tick(
        &mut self,
        keys_down: &[bool; 16],
        keys_released: &[bool; 16],
        speed: u64,
    ) -> Result<()> {
        let timer_cycle_duration = time::Duration::from_nanos(1_000_000_000 / 60);
        let cpu_cycle_duration = time::Duration::from_nanos(1_000_000_000 / speed);

        let now = time::Instant::now();
        let mut total_elapsed = time::Duration::from_secs(0);

        self.update_timers();

        'cpu: loop {
            match self.next_instruction() {
                Ok(next_instruction) => {
                    self.execute_instruction(next_instruction, keys_down, keys_released)?
                }
                Err(e) => eprintln!("{}", e),
            }

            let cpu_elapsed = now.elapsed() - total_elapsed;
            total_elapsed += cpu_elapsed;

            if cpu_elapsed < cpu_cycle_duration {
                let time_left = cpu_cycle_duration - cpu_elapsed;
                total_elapsed += time_left;
                std::thread::sleep(time_left);
            }

            if total_elapsed >= timer_cycle_duration {
                break 'cpu;
            }
        }

        Ok(())
    }
}