const numberSystemQuestions = [
    {
        question: "What is the base of the binary number system?",
        options: ["2", "8", "10", "16"],
        answer: 0,
        explanation: "The binary number system is base-2, meaning it only uses two digits: 0 and 1."
    },
    {
        question: "Which of the following is NOT a valid hexadecimal digit?",
        options: ["A", "F", "G", "9"],
        answer: 2,
        explanation: "Hexadecimal uses digits 0-9 and letters A-F. 'G' is not a valid hexadecimal digit."
    },
    {
        question: "What is the decimal equivalent of the binary number 1010?",
        options: ["8", "10", "12", "14"],
        answer: 1,
        explanation: "1010 in binary is 10 in decimal: (1×2³) + (0×2²) + (1×2¹) + (0×2⁰) = 8 + 0 + 2 + 0 = 10"
    },
    {
        question: "How many bits are in a byte?",
        options: ["4", "8", "16", "32"],
        answer: 1,
        explanation: "A byte consists of 8 bits, where each bit can be either 0 or 1."
    },
    {
        question: "What is the binary equivalent of the decimal number 15?",
        options: ["1110", "1111", "1010", "1101"],
        answer: 1,
        explanation: "15 in decimal is 1111 in binary: (1×8) + (1×4) + (1×2) + (1×1) = 15"
    },
    {
        question: "Which number system is also known as base-8?",
        options: ["Binary", "Octal", "Decimal", "Hexadecimal"],
        answer: 1,
        explanation: "The octal number system is base-8, using digits 0-7."
    },
    {
        question: "What is the hexadecimal equivalent of the binary number 1111?",
        options: ["A", "B", "E", "F"],
        answer: 3,
        explanation: "1111 in binary is 15 in decimal, which is represented as 'F' in hexadecimal."
    },
    {
        question: "What is the decimal equivalent of the hexadecimal number 1A?",
        options: ["16", "20", "26", "30"],
        answer: 2,
        explanation: "1A in hexadecimal is (1×16) + (10×1) = 26 in decimal."
    },
    {
        question: "Which of the following represents the largest value?",
        options: ["1000 (binary)", "10 (hexadecimal)", "12 (octal)", "15 (decimal)"],
        answer: 1,
        explanation: "1000 binary = 8, 10 hex = 16, 12 octal = 10, 15 decimal = 15. So, 10 hex (16) is the largest."
    },
    {
        question: "What is the result of the binary addition: 1011 + 1101?",
        options: ["10100", "11000", "11100", "10000"],
        answer: 1,
        explanation: "1011 (11) + 1101 (13) = 11000 (24) in binary."
    },
    {
        question: "How many different values can be represented by 4 bits?",
        options: ["8", "16", "32", "64"],
        answer: 1,
        explanation: "4 bits can represent 2⁴ = 16 different values (from 0000 to 1111)."
    },
    {
        question: "What is the two's complement representation of -5 in 4 bits?",
        options: ["1010", "1011", "1100", "1101"],
        answer: 1,
        explanation: "To get two's complement: represent 5 (0101), invert bits (1010), add 1 (1011)."
    },
    {
        question: "What is the octal equivalent of the binary number 110110?",
        options: ["33", "55", "66", "77"],
        answer: 2,
        explanation: "Group binary as 110 110 → 6 6 in octal."
    },
    {
        question: "What is the hexadecimal equivalent of the binary number 11101101?",
        options: ["ED", "DE", "EB", "D7"],
        answer: 0,
        explanation: "Group binary as 1110 1101 → E D in hexadecimal."
    },
    {
        question: "Which of the following is the correct binary representation of the decimal number 0.625?",
        options: ["0.101", "0.110", "0.111", "1.000"],
        answer: 0,
        explanation: "0.625 in decimal is 0.101 in binary (0.5 + 0.125 = 0.625)."
    },
    {
        question: "What is the result of the binary subtraction: 1100 - 101?",
        options: ["111", "101", "110", "100"],
        answer: 0,
        explanation: "1100 (12) - 0101 (5) = 0111 (7) in binary."
    },
    {
        question: "Which of the following is a valid BCD (Binary-Coded Decimal) representation of the decimal number 25?",
        options: ["11001", "100101", "00100101", "10101"],
        answer: 2,
        explanation: "In BCD, each decimal digit is represented by 4 bits: 2 = 0010, 5 = 0101 → 00100101."
    },
    {
        question: "What is the decimal equivalent of the octal number 347?",
        options: ["231", "232", "233", "234"],
        answer: 2,
        explanation: "347 in octal = (3×8²) + (4×8¹) + (7×8⁰) = 192 + 32 + 7 = 231 in decimal."
    },
    {
        question: "What is the binary equivalent of the hexadecimal number 2F?",
        options: ["101111", "101011", "111101", "10111100"],
        answer: 0,
        explanation: "2F in hex = 2 = 0010, F = 1111 → 00101111 in binary."
    },
    {
        question: "What is the result of the binary multiplication: 101 × 11?",
        options: ["1001", "1101", "1111", "1011"],
        answer: 2,
        explanation: "101 (5) × 11 (3) = 1111 (15) in binary."
    },
    {
        question: "Which of the following represents an even number in binary?",
        options: ["1011", "1101", "1110", "1001"],
        answer: 2,
        explanation: "In binary, if the least significant bit is 0, the number is even. 1110 is the only option ending with 0."
    },
    {
        question: "What is the 8-bit two's complement representation of the decimal number -10?",
        options: ["11110101", "11110110", "11110111", "11111000"],
        answer: 1,
        explanation: "+10 = 00001010, invert = 11110101, +1 = 11110110."
    },
    {
        question: "What is the hexadecimal equivalent of the decimal number 255?",
        options: ["FF", "FE", "EF", "EE"],
        answer: 0,
        explanation: "255 in decimal is FF in hexadecimal (15×16 + 15 = 255)."
    },
    {
        question: "Which of the following is the correct binary addition of 1011 + 110?",
        options: ["10001", "10010", "10011", "10101"],
        answer: 0,
        explanation: "1011 (11) + 0110 (6) = 10001 (17) in binary."
    },
    {
        question: "What is the decimal equivalent of the binary number 1101.101?",
        options: ["13.5", "13.625", "13.75", "13.875"],
        answer: 1,
        explanation: "1101 = 13, .101 = 0.5 + 0.125 = 0.625 → 13.625"
    },
    {
        question: "What is the result of the binary division: 1100 ÷ 11?",
        options: ["100", "101", "110", "111"],
        answer: 0,
        explanation: "1100 (12) ÷ 11 (3) = 100 (4) in binary."
    },
    {
        question: "Which of the following is the correct binary representation of the decimal number -7 in 4-bit two's complement?",
        options: ["1001", "1010", "1011", "1100"],
        answer: 0,
        explanation: "+7 = 0111, invert = 1000, +1 = 1001."
    },
    {
        question: "What is the octal equivalent of the hexadecimal number 2B?",
        options: ["43", "53", "63", "73"],
        answer: 1,
        explanation: "2B in hex = 00101011 in binary = 053 in octal."
    },
    {
        question: "What is the result of the binary operation: 1010 AND 1100?",
        options: ["1000", "1010", "1100", "1110"],
        answer: 0,
        explanation: "Bitwise AND: 1010 & 1100 = 1000 (1 only where both bits are 1)."
    },
    {
        question: "What is the result of the binary operation: 1010 OR 1100?",
        options: ["1000", "1010", "1100", "1110"],
        answer: 3,
        explanation: "Bitwise OR: 1010 | 1100 = 1110 (1 where either bit is 1)."
    },
    {
        question: "What is the result of the binary operation: 1010 XOR 1100?",
        options: ["0110", "1000", "1010", "1110"],
        answer: 0,
        explanation: "Bitwise XOR: 1010 ^ 1100 = 0110 (1 where bits are different)."
    },
    {
        question: "What is the binary equivalent of the decimal number 0.1 (to 8 bits)?",
        options: ["0.00011001", "0.00011101", "0.00011010", "0.00011110"],
        answer: 0,
        explanation: "0.1 in decimal is approximately 0.00011001 in binary (repeating)."
    },
    {
        question: "What is the hexadecimal equivalent of the binary number 101010101010?",
        options: ["AAA", "555", "AAA0", "5550"],
        answer: 0,
        explanation: "Group binary as 1010 1010 1010 → A A A in hexadecimal."
    },
    {
        question: "What is the result of left-shifting the binary number 1011 by 2 positions?",
        options: ["101100", "10110", "1011000", "10110"],
        answer: 0,
        explanation: "Left shift by 2 adds two 0s at the end: 101100 (equivalent to multiplying by 4)."
    },
    {
        question: "What is the result of right-shifting the binary number 1011 by 1 position (logical shift)?",
        options: ["101", "1010", "1011", "110"],
        answer: 0,
        explanation: "Right shift by 1 removes the last bit: 101 (equivalent to integer division by 2)."
    },
    {
        question: "What is the range of numbers that can be represented by an 8-bit unsigned integer?",
        options: ["0 to 255", "-128 to 127", "0 to 511", "-255 to 255"],
        answer: 0,
        explanation: "8-bit unsigned can represent 2⁸ = 256 values from 0 to 255."
    },
    {
        question: "What is the range of numbers that can be represented by an 8-bit signed integer in two's complement?",
        options: ["0 to 255", "-128 to 127", "0 to 511", "-255 to 255"],
        answer: 1,
        explanation: "8-bit two's complement can represent -128 to 127 (one more negative number than positive)."
    },
    {
        question: "What is the result of the binary operation: NOT(1010)?",
        options: ["0101", "1010", "1111", "0000"],
        answer: 0,
        explanation: "Bitwise NOT inverts all bits: 1010 → 0101."
    },
    {
        question: "What is the binary equivalent of the decimal number -1 in 8-bit two's complement?",
        options: ["11111110", "11111111", "10000001", "10000000"],
        answer: 1,
        explanation: "+1 = 00000001, invert = 11111110, +1 = 11111111."
    },
    {
        question: "What is the result of the binary addition: 1111 + 0001 (using 4-bit two's complement)?",
        options: ["0000", "10000", "11110", "overflow"],
        answer: 0,
        explanation: "In 4-bit two's complement, 1111 (-1) + 0001 (1) = 0000 (0) with carry out ignored."
    },
    {
        question: "Which of the following is the correct binary representation of the decimal number 0.375?",
        options: ["0.011", "0.101", "0.110", "0.111"],
        answer: 0,
        explanation: "0.375 = 0.25 + 0.125 = 0.011 in binary."
    },
    {
        question: "What is the hexadecimal equivalent of the binary number 11110000?",
        options: ["F0", "0F", "FF", "0E"],
        answer: 0,
        explanation: "1111 0000 → F 0 in hexadecimal."
    },
    {
        question: "What is the result of the binary operation: 1010 NAND 1100?",
        options: ["0111", "1000", "1010", "1100"],
        answer: 0,
        explanation: "NAND is NOT AND: 1010 & 1100 = 1000, then NOT = 0111."
    },
    {
        question: "What is the result of the binary operation: 1010 NOR 1100?",
        options: ["0001", "0010", "0100", "1000"],
        answer: 0,
        explanation: "NOR is NOT OR: 1010 | 1100 = 1110, then NOT = 0001."
    },
    {
        question: "What is the result of the binary operation: 1010 XNOR 1100?",
        options: ["1001", "0110", "1010", "1100"],
        answer: 0,
        explanation: "XNOR is NOT XOR: 1010 ^ 1100 = 0110, then NOT = 1001."
    },
    {
        question: "What is the binary equivalent of the decimal number 42?",
        options: ["101010", "101100", "110011", "111000"],
        answer: 0,
        explanation: "42 in decimal is 101010 in binary (32 + 8 + 2 = 42)."
    }
];
