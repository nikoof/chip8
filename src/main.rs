use anyhow::Result;
use minifb::{ScaleMode, Window, WindowOptions};
use std::io::Read;
use std::{fs::File, path::Path};

use state::State;

pub mod operation;
pub mod state;
pub mod window;

fn main() -> Result<()> {
    let mut window = Window::new(
        "chip8",
        640,
        320,
        WindowOptions {
            resize: true,
            scale_mode: ScaleMode::AspectRatioStretch,
            ..WindowOptions::default()
        },
    )
    .unwrap_or_else(|err| panic!("Failed to create window: {}", err));
    window.limit_update_rate(Some(std::time::Duration::from_secs(1 / 60)));

    let mut state = State::new(window);

    let program = read_program_from_file(Path::new("./tests/bin/6-keypad.ch8"))?;
    state.load_program(&program);

    while state.display_open() {
        state.tick();
    }

    Ok(())
}

fn read_program_from_file(path: &Path) -> Result<Vec<u8>> {
    let mut buf = Vec::new();
    let mut file = File::open(path)?;
    file.read_to_end(&mut buf)?;
    Ok(buf)
}
