import { IMetadataApplication } from "./schemas/metadata/IMetadataApplication";

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
export function metadata(): never;

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
export function metadata<Types extends unknown[]>(): IMetadataApplication;

/** @internal */
export function metadata(): never {
  NoTransformConfigurationError("reflect.metadata");
}

export function name<T, Regular extends boolean = false>(): string;
export function name(): never;
export function name(): never {
  NoTransformConfigurationError("reflect.name");
}
