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
 * @template Types Tuple of target types
 * @returns Metadata application
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function metadata(): never;

/**
 * Generates comprehensive metadata about TypeScript types at runtime.
 *
 * Creates detailed structural information about your TypeScript types including 
 * properties, constraints, nested types, and relationships. Essential for building 
 * tools that need deep type introspection like form generators, documentation 
 * systems, or advanced validation frameworks.
 *
 * The metadata includes all the information typia uses internally for validation, 
 * serialization, and schema generation.
 *
 * @example
 * ```typescript
 * interface User { 
 *   name: string; 
 *   age: number; 
 *   profile?: Profile; 
 * }
 * 
 * const metadata = typia.reflect.metadata<[User]>();
 * // Contains complete structural information about User and Profile types
 * ```
 *
 * @template Types Tuple of TypeScript types to analyze
 * @returns Complete metadata application with type structures and components
 */
export function metadata<Types extends unknown[]>(): IMetadataApplication;

/**
 * @internal
 */
export function metadata(): never {
  NoTransformConfigurationError("reflect.metadata");
}

export function name<T, Regular extends boolean = false>(): string;
export function name(): never;
export function name(): never {
  NoTransformConfigurationError("reflect.name");
}
