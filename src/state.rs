use crate::display::Display;
use crate::operation::Operation;

const FONT: [u8; 80] = [
    0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
    0x20, 0x60, 0x20, 0x20, 0x70, // 1
    0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
    0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
    0x90, 0x90, 0xF0, 0x10, 0x10, // 4
    0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
    0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
    0xF0, 0x10, 0x20, 0x40, 0x40, // 7
    0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
    0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
    0xF0, 0x90, 0xF0, 0x90, 0x90, // A
    0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
    0xF0, 0x80, 0x80, 0x80, 0xF0, // C
    0xE0, 0x90, 0x90, 0x90, 0xE0, // D
    0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
    0xF0, 0x80, 0xF0, 0x80, 0x80, // F
];

pub struct State {
    memory: [u8; 4096],
    pc: usize,
    index: usize,
    stack: Vec<u16>,
    delay_timer: u8,
    sound_timer: u8,
    variables: [u8; 16],
    display: Display,
}

impl State {
    pub fn new() -> Self {
        Self {
            memory: [0; 4096],
            pc: 0,
            index: 0,
            stack: vec![],
            delay_timer: 0,
            sound_timer: 0,
            variables: [0; 16],
            display: Display::new(),
        }
    }

    pub fn default() -> Self {
        let mut memory = [0u8; 4096];
        memory[0x50..=0x9F].copy_from_slice(&FONT);

        Self {
            memory,
            ..Self::new()
        }
    }

    pub fn next_operation(&mut self) -> Operation {
        let opcode = (self.memory[self.pc] as u16) << 8 + self.memory[self.pc + 1] as u16;
        self.pc += 2;
        Operation::new(opcode)
    }

    pub fn update(&mut self, op: Operation) {
        match op {
            _ => (),
        }
    }
}
