import { IValidation } from "./IValidation";
import { Primitive } from "./Primitive";

/* ===========================================================
    PROTOCOL BUFFER
      - MESSAGE
      - DECODE
      - ENCODE
      - FACTORY FUNCTIONS
==============================================================
    SCHEMA
----------------------------------------------------------- */
export function message(): never;

export function message<T>(): string;

/**
 * @internal
 */
export function message(): never {
    halt("message");
}

/* -----------------------------------------------------------
    DECODE
----------------------------------------------------------- */
export function decode(input: Uint8Array): never;

export function decode<T>(input: Uint8Array): Primitive<T>;

/**
 * @internal
 */
export function decode(): never {
    halt("decode");
}

export function isDecode(input: Uint8Array): never;

export function isDecode<T>(input: Uint8Array): Primitive<T> | null;

/**
 * @internal
 */
export function isDecode(): never {
    halt("isDecode");
}

export function assertDecode(input: Uint8Array): never;

export function assertDecode<T>(input: Uint8Array): Primitive<T>;

/**
 * @internal
 */
export function assertDecode(): never {
    halt("assertDecode");
}

export function validateDecode(input: Uint8Array): never;

export function validateDecode<T>(input: Uint8Array): IValidation<Primitive<T>>;

/**
 * @internal
 */
export function validateDecode(): never {
    halt("validateDecode");
}

/* -----------------------------------------------------------
    ENCODE
----------------------------------------------------------- */
/**
 * @internal
 */
export function size<T>(input: T): number;

/**
 * @internal
 */
export function size(): never {
    halt("size");
}

export function encode<T>(input: T): Uint16Array;

/**
 * @internal
 */
export function encode(): never {
    halt("encode");
}

export function isEncode<T>(input: T): Uint16Array | null;

/**
 * @internal
 */
export function isEncode(): never {
    halt("isEncode");
}

export function assertEncode<T>(input: T): Uint16Array;

/**
 * @internal
 */
export function assertEncode(): never {
    halt("assertEncode");
}

export function validateEncode<T>(input: T): IValidation<Uint16Array>;

/**
 * @internal
 */
export function validateEncode(): never {
    halt("validateEncode");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
export function createDecode(): never;
export function createDecode<T>(): (input: Uint8Array) => Primitive<T>;

/**
 * @internal
 */
export function createDecode<T>(): (input: Uint8Array) => Primitive<T> {
    halt("createDecode");
}

export function createIsDecode(): never;
export function createIsDecode<T>(): (input: Uint8Array) => Primitive<T> | null;

/**
 * @internal
 */
export function createIsDecode<T>(): (
    input: Uint8Array,
) => Primitive<T> | null {
    halt("createIsDecode");
}

export function createAssertDecode(): never;
export function createAssertDecode<T>(): (input: Uint8Array) => Primitive<T>;

/**
 * @internal
 */
export function createAssertDecode<T>(): (input: Uint8Array) => Primitive<T> {
    halt("createAssertDecode");
}

export function createValidateDecode(): never;
export function createValidateDecode<T>(): (
    input: Uint8Array,
) => IValidation<Primitive<T>>;

/**
 * @internal
 */
export function createValidateDecode<T>(): (
    input: Uint8Array,
) => IValidation<Primitive<T>> {
    halt("createValidateDecode");
}

/**
 * @internal
 */
export function createSize(): never;

/**
 * @internal
 */
export function createSize<T>(): (input: T) => number;

/**
 * @internal
 */
export function createSize<T>(): (input: T) => number {
    halt("createEncode");
}

export function createEncode(): never;
export function createEncode<T>(): (input: T) => Uint8Array;

/**
 * @internal
 */
export function createEncode<T>(): (input: T) => Uint8Array {
    halt("createEncode");
}

export function createIsEncode(): never;
export function createIsEncode<T>(): (input: T) => Uint8Array | null;

/**
 * @internal
 */
export function createIsEncode<T>(): (input: T) => Uint8Array | null {
    halt("createIsEncode");
}

export function createAssertEncode(): never;
export function createAssertEncode<T>(): (input: T) => Uint8Array;

/**
 * @internal
 */
export function createAssertEncode<T>(): (input: T) => Uint8Array {
    halt("createAssertEncode");
}

export function createValidateEncode(): never;
export function createValidateEncode<T>(): (
    input: T,
) => IValidation<Uint8Array>;

/**
 * @internal
 */
export function createValidateEncode<T>(): (
    input: T,
) => IValidation<Uint8Array> {
    halt("createValidateEncode");
}

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.protobuf.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
