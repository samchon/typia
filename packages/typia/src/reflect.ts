import {
  IMetadataSchemaCollection,
  IMetadataSchemaUnit,
} from "@typia/interface";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
<<<<<<< HEAD
 * > You must configure the generic argument `Types`.
 *
 * Metadata Application.
 *
 * Creates a Metadata application which contains the metadata and components.
 *
 * Note that, all of the collection types like Array, Tuple and Objects are
 * stored in the {@link IMetadataApplication.components} property. Also, alias
 * types are stored in the {@link IMetadataApplication.aliases} property, too.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Types Tuple of target types
 * @returns Metadata application
=======
 * Generates metadata schemas for multiple types.
 *
 * @danger You must configure the generic argument `Types`
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function schemas(): never;

/**
<<<<<<< HEAD
 * Metadata Application.
 *
 * Creates a Metadata application which contains the metadata and components.
 *
 * Note that, all of the collection types like Array, Tuple and Objects are
 * stored in the {@link IMetadataApplication.components} property. Also, alias
 * types are stored in the {@link IMetadataApplication.aliases} property, too.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Types Tuple of target types
 * @returns Metadata application
=======
 * Generates metadata schemas for multiple types.
 *
 * Creates {@link IMetadataSchemaCollection} containing metadata for all types in
 * the tuple. Collection types (Array, Tuple, Object) are stored in
 * `components`. Alias types are stored in `aliases`.
 *
 * @template Types Tuple of target types
 * @returns Metadata schema collection
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export function schemas<Types extends unknown[]>(): IMetadataSchemaCollection;

/** @internal */
export function schemas(): never {
  NoTransformConfigurationError("reflect.schemas");
}

<<<<<<< HEAD
export function schema(): never;
=======
/**
 * Generates metadata schema for a single type.
 *
 * @danger You must configure the generic argument `Type`
 */
export function schema(): never;

/**
 * Generates metadata schema for a single type.
 *
 * Creates {@link IMetadataSchemaUnit} containing metadata for the type.
 *
 * @template Type Target type
 * @returns Metadata schema unit
 */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function schema<Type>(): IMetadataSchemaUnit;

/** @internal */
export function schema(): never {
  NoTransformConfigurationError("reflect.schema");
}

<<<<<<< HEAD
export function name<T, Regular extends boolean = false>(): string;
export function name(): never;
=======
/**
 * Gets the runtime type name of type `T`.
 *
 * @danger You must configure the generic argument `T`
 */
export function name(): never;

/**
 * Gets the runtime type name of type `T`.
 *
 * Returns a string representation of the type name.
 *
 * @template T Target type
 * @template Regular If `true`, returns regular (normalized) name
 * @returns Type name string
 */
export function name<T, Regular extends boolean = false>(): string;

/** @internal */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
export function name(): never {
  NoTransformConfigurationError("reflect.name");
}
