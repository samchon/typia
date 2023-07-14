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

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.protobuf.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
