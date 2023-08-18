import { Namespace } from "./functional/Namespace";

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
Object.assign(decode, Namespace.protobuf.decode("decode"));

export function isDecode(input: Uint8Array): never;

export function isDecode<T>(input: Uint8Array): Primitive<T> | null;

/**
 * @internal
 */
export function isDecode(): never {
    halt("isDecode");
}
Object.assign(isDecode, Namespace.is());
Object.assign(isDecode, Namespace.protobuf.decode("isDecode"));

export function assertDecode(input: Uint8Array): never;

export function assertDecode<T>(input: Uint8Array): Primitive<T>;

/**
 * @internal
 */
export function assertDecode(): never {
    halt("assertDecode");
}
Object.assign(assertDecode, Namespace.assert("assertDecode"));
Object.assign(assertDecode, Namespace.protobuf.decode("assertDecode"));

export function validateDecode(input: Uint8Array): never;

export function validateDecode<T>(input: Uint8Array): IValidation<Primitive<T>>;

/**
 * @internal
 */
export function validateDecode(): never {
    halt("validateDecode");
}
Object.assign(validateDecode, Namespace.validate());
Object.assign(validateDecode, Namespace.protobuf.decode("validateDecode"));

/* -----------------------------------------------------------
    ENCODE
----------------------------------------------------------- */
export function encode<T>(input: T): Uint8Array;

/**
 * @internal
 */
export function encode(): never {
    halt("encode");
}
Object.assign(encode, Namespace.protobuf.encode("encode"));

export function isEncode<T>(input: T): Uint8Array | null;

/**
 * @internal
 */
export function isEncode(): never {
    halt("isEncode");
}
Object.assign(isEncode, Namespace.is());
Object.assign(isEncode, Namespace.protobuf.encode("isEncode"));

export function assertEncode<T>(input: T): Uint8Array;

/**
 * @internal
 */
export function assertEncode(): never {
    halt("assertEncode");
}
Object.assign(assertEncode, Namespace.assert("assertEncode"));
Object.assign(assertEncode, Namespace.protobuf.encode("assertEncode"));

export function validateEncode<T>(input: T): IValidation<Uint8Array>;

/**
 * @internal
 */
export function validateEncode(): never {
    halt("validateEncode");
}
Object.assign(validateEncode, Namespace.validate());
Object.assign(validateEncode, Namespace.protobuf.encode("validateEncode"));

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

export function createEncode(): never;
export function createEncode<T>(): (input: T) => Uint8Array;

/**
 * @internal
 */
export function createEncode<T>(): (input: T) => Uint8Array {
    halt("createEncode");
}
Object.assign(createEncode, Namespace.protobuf.encode("createEncode"));

export function createIsEncode(): never;
export function createIsEncode<T>(): (input: T) => Uint8Array | null;

/**
 * @internal
 */
export function createIsEncode<T>(): (input: T) => Uint8Array | null {
    halt("createIsEncode");
}
Object.assign(createIsEncode, Namespace.is());
Object.assign(createIsEncode, Namespace.protobuf.encode("createIsEncode"));

export function createAssertEncode(): never;
export function createAssertEncode<T>(): (input: T) => Uint8Array;

/**
 * @internal
 */
export function createAssertEncode<T>(): (input: T) => Uint8Array {
    halt("createAssertEncode");
}
Object.assign(createAssertEncode, Namespace.assert("createAssertEncode"));
Object.assign(
    createAssertEncode,
    Namespace.protobuf.encode("createAssertEncode"),
);

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
Object.assign(createValidateEncode, Namespace.validate());
Object.assign(
    createValidateEncode,
    Namespace.protobuf.encode("createValidateEncode"),
);

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.protobuf.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
    );
}
