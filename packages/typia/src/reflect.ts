import {
  Atomic,
  IMetadataSchemaCollection,
  IMetadataSchemaUnit,
} from "@typia/interface";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
 * Generates metadata schemas for multiple types.
 *
 * @danger You must configure the generic argument `_Types`
 */
export function schemas(): never;

/**
 * Generates metadata schemas for multiple types.
 *
 * Creates {@link IMetadataSchemaCollection} containing metadata for all types in
 * the tuple. Collection types (Array, Tuple, Object) are stored in
 * `components`. Alias types are stored in `aliases`.
 *
 * @template _Types Tuple of target types
 *
 * @returns Metadata schema collection
 */
export function schemas<_Types extends unknown[]>(): IMetadataSchemaCollection;

/** @internal */
export function schemas(): never {
  NoTransformConfigurationError("reflect.schemas");
}

/**
 * Generates metadata schema for a single type.
 *
 * @danger You must configure the generic argument `_Type`
 */
export function schema(): never;

/**
 * Generates metadata schema for a single type.
 *
 * Creates {@link IMetadataSchemaUnit} containing metadata for the type.
 *
 * @template _Type Target type
 *
 * @returns Metadata schema unit
 */
export function schema<_Type>(): IMetadataSchemaUnit;

/** @internal */
export function schema(): never {
  NoTransformConfigurationError("reflect.schema");
}

/**
 * Gets the runtime type name of type `_T`.
 *
 * @danger You must configure the generic argument `_T`
 */
export function name(): never;

/**
 * Gets the runtime type name of type `_T`.
 *
 * Returns a string representation of the type name.
 *
 * @template _T Target type
 * @template _Regular If `true`, returns regular (normalized) name
 *
 * @returns Type name string
 */
export function name<_T, _Regular extends boolean = false>(): string;

/** @internal */
export function name(): never {
  NoTransformConfigurationError("reflect.name");
}

/**
 * Converts union literal type to array.
 *
 * @danger You must configure the generic argument `T`
 */
export function literals(): never;

/**
 * Converts union literal type to array.
 *
 * Extracts all members of a union literal type `T` into an array at runtime.
 *
 * @template T Union literal type (e.g., `"A" | "B" | 1`)
 *
 * @returns Array containing all union members
 */
export function literals<T extends Atomic.Type | null>(): T[];

/** @internal */
export function literals(): never {
  NoTransformConfigurationError("reflect.literals");
}
