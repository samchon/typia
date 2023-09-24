import { Atomic } from "./typings/Atomic";

import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";

/* ===========================================================
    HTTP
      - QUERY
      - HEADERS
      - PARAMETER
      - FACTORY FUNCTIONS
==============================================================
    QUERY
----------------------------------------------------------- */
export function query(): never;
export function query<T extends object>(
    input: string | URLSearchParams,
): Resolved<T>;

/**
 * @internal
 */
export function query(): never {
    halt("query");
}

export function isQuery(): never;
export function isQuery<T extends object>(
    input: string | URLSearchParams,
): Resolved<T> | null;

/**
 * @internal
 */
export function isQuery(): never {
    halt("isQuery");
}

export function assertQuery(): never;
export function assertQuery<T extends object>(
    input: string | URLSearchParams,
): Resolved<T>;

/**
 * @internal
 */
export function assertQuery(): never {
    halt("assertQuery");
}

export function validateQuery(): never;
export function validateQuery<T extends object>(
    input: string | URLSearchParams,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateQuery(): never {
    halt("validateQuery");
}

/* -----------------------------------------------------------
    HEADERS
----------------------------------------------------------- */
export function headers(): never;
export function headers<T extends object>(
    input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/**
 * @internal
 */
export function headers(): never {
    halt("headers");
}

export function isHeaders(): never;
export function isHeaders<T extends object>(
    input: Record<string, string | string[] | undefined>,
): Resolved<T> | null;

/**
 * @internal
 */
export function isHeaders(): never {
    halt("isHeaders");
}

export function assertHeaders(): never;
export function assertHeaders<T extends object>(
    input: Record<string, string | string[] | undefined>,
): Resolved<T>;

/**
 * @internal
 */
export function assertHeaders(): never {
    halt("assertHeaders");
}

export function validateHeaders(): never;
export function validateHeaders<T extends object>(
    input: Record<string, string | string[] | undefined>,
): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateHeaders(): never {
    halt("validateHeaders");
}

/* -----------------------------------------------------------
    PARAMETER
----------------------------------------------------------- */
export function parameter(): never;
export function parameter<T extends Atomic.Type>(input: string): Resolved<T>;

/**
 * @internal
 */
export function parameter(): never {
    halt("parameter");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link query} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createQuery(): never;

/**
 * Creates a reusable {@link query} function.
 *
 * @template T The type of the query object
 * @returns A reusable `query` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createQuery<T extends object>(): (
    input: string | URLSearchParams,
) => T;

/**
 * @internal
 */
export function createQuery<T>(): (input: string | URLSearchParams) => T {
    halt("createQuery");
}

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @danger You must configure the generic argument `T`
 * @template T The type of the query object
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsQuery(): never;

/**
 * Creates a reusable {@link isQuery} function.
 *
 * @template T The type of the query object
 * @returns A reusable `isQuery` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsQuery<T extends object>(): (
    input: string | URLSearchParams,
) => T | null;

/**
 * @internal
 */
export function createIsQuery<T>(): (
    input: string | URLSearchParams,
) => T | null {
    halt("createIsQuery");
}

export function createAssertQuery(): never;
export function createAssertQuery<T extends object>(): (
    input: string | URLSearchParams,
) => T;

/**
 * @internal
 */
export function createAssertQuery<T>(): (input: string | URLSearchParams) => T {
    halt("createAssertQuery");
}

export function createValidateQuery(): never;
export function createValidateQuery<T extends object>(): (
    input: string | URLSearchParams,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateQuery<T>(): (
    input: string | URLSearchParams,
) => IValidation<Resolved<T>> {
    halt("createValidateQuery");
}

export function createHeaders(): never;
export function createHeaders<T extends object>(): (
    input: Record<string, string | string[] | undefined>,
) => T;

/**
 * @internal
 */
export function createHeaders<T>(): (
    input: Record<string, string | string[] | undefined>,
) => T {
    halt("createHeaders");
}

export function createIsHeaders(): never;
export function createIsHeaders<T extends object>(): (
    input: Record<string, string | string[] | undefined>,
) => T | null;

/**
 * @internal
 */
export function createIsHeaders<T>(): (
    input: Record<string, string | string[] | undefined>,
) => T | null {
    halt("createIsHeaders");
}

export function createAssertHeaders(): never;
export function createAssertHeaders<T extends object>(): (
    input: Record<string, string | string[] | undefined>,
) => T;

/**
 * @internal
 */
export function createAssertHeaders<T>(): (
    input: Record<string, string | string[] | undefined>,
) => T {
    halt("createAssertHeaders");
}

export function createValidateHeaders(): never;
export function createValidateHeaders<T extends object>(): (
    input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateHeaders<T>(): (
    input: Record<string, string | string[] | undefined>,
) => IValidation<Resolved<T>> {
    halt("createValidateHeaders");
}

export function createParameter(): never;
export function createParameter<T extends Atomic.Type>(): (input: string) => T;

/**
 * @internal
 */
export function createParameter<T extends Atomic.Type>(): (input: string) => T {
    halt("createParameter");
}

/**
 * @internal
 */
function halt(name: string): never {
    throw new Error(
        `Error on typia.http.${name}(): no transform has been configured. Read and follow https://typia.misc.io/docs/setup please.`,
    );
}
