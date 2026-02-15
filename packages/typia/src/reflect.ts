import {
  IMetadataSchemaCollection,
  IMetadataSchemaUnit,
} from "@typia/interface";

import { NoTransformConfigurationError } from "./transformers/NoTransformConfigurationError";

/**
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
 */
export function schemas(): never;

/**
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
 */
export function schemas<Types extends unknown[]>(): IMetadataSchemaCollection;

/** @internal */
export function schemas(): never {
  NoTransformConfigurationError("reflect.schemas");
}

export function schema(): never;
export function schema<Type>(): IMetadataSchemaUnit;

/** @internal */
export function schema(): never {
  NoTransformConfigurationError("reflect.schema");
}

export function name<T, Regular extends boolean = false>(): string;
export function name(): never;
export function name(): never {
  NoTransformConfigurationError("reflect.name");
}
