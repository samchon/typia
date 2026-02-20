import { Atomic } from "../typings/Atomic";
import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

/**
 * Metadata schema representing a TypeScript type's structure.
 *
 * `IMetadataSchema` is typia's internal type representation, capturing full
 * TypeScript type information including unions, optionality, nullability,
 * and type constraints. Used by `typia.reflect.schema<T>()` for runtime
 * type introspection.
 *
 * Type categories:
 *
 * - Primitives: {@link atomics} (boolean, bigint, number, string)
 * - Literals: {@link constants} (literal values like `"hello"` or `42`)
 * - Templates: {@link templates} (template literal types)
 * - Collections: {@link arrays}, {@link tuples}, {@link sets}, {@link maps}
 * - Objects: {@link objects} (named object types)
 * - Aliases: {@link aliases} (type aliases)
 * - Natives: {@link natives} (built-in classes like Date, Uint8Array)
 * - Functions: {@link functions} (function types)
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IMetadataSchema {
  /** Whether the type is `any`. */
  any: boolean;

  /** Whether the type is required (not `undefined`). */
  required: boolean;

  /** Whether the type is optional (`?` modifier). */
  optional: boolean;

  /** Whether the type is nullable (`null` included). */
  nullable: boolean;

  /** Function types in the union. */
  functions: IMetadataSchema.IFunction[];

  /** Primitive types (boolean, bigint, number, string) in the union. */
  atomics: IMetadataSchema.IAtomic[];

  /** Literal constant values in the union. */
  constants: IMetadataSchema.IConstant[];

  /** Template literal types in the union. */
  templates: IMetadataSchema.ITemplate[];

  /** Escaped type info (original and transformed). */
  escaped: IMetadataSchema.IEscaped | null;

  /** Rest element type for variadic tuples. */
  rest: IMetadataSchema | null;

  /** Array type references in the union. */
  arrays: IMetadataSchema.IReference[];

  /** Tuple type references in the union. */
  tuples: IMetadataSchema.IReference[];

  /** Object type references in the union. */
  objects: IMetadataSchema.IReference[];

  /** Type alias references in the union. */
  aliases: IMetadataSchema.IReference[];

  /** Native class references (Date, Uint8Array, etc.) in the union. */
  natives: IMetadataSchema.IReference[];

  /** Set types in the union. */
  sets: IMetadataSchema.ISet[];

  /** Map types in the union. */
  maps: IMetadataSchema.IMap[];
}
export namespace IMetadataSchema {
  /** Function type metadata. */
  export interface IFunction {
    /** Whether the function is async. */
    async: boolean;

    /** Function parameters. */
    parameters: IParameter[];

    /** Return type schema. */
    output: IMetadataSchema;
  }

  /** Function parameter metadata. */
  export interface IParameter {
    /** Parameter name. */
    name: string;

    /** Parameter type schema. */
    type: IMetadataSchema;

    /** JSDoc description. */
    description: string | null;

    /** JSDoc tags. */
    jsDocTags: IJsDocTagInfo[];
  }

  /** Primitive atomic type metadata. */
  export interface IAtomic {
    /** Primitive type kind. */
    type: "boolean" | "bigint" | "number" | "string";

    /** Type constraint tags (e.g., `@minimum`, `@format`). */
    tags: IMetadataTypeTag[][];
  }

  /** Literal constant type metadata. */
  export type IConstant =
    | IConstant.IBase<"boolean">
    | IConstant.IBase<"number">
    | IConstant.IBase<"string">
    | IConstant.IBase<"bigint">;
  export namespace IConstant {
    /** Base interface for constant types. */
    export interface IBase<Type extends Atomic.Literal> {
      /** Constant type kind. */
      type: Type;

      /** Literal values in the union. */
      values: IValue<Atomic.Mapper[Type]>[];
    }

    /** Single constant value metadata. */
    export interface IValue<T extends Atomic.Type> {
      /** The literal value. */
      value: T;

      /** Type constraint tags. */
      tags: IMetadataTypeTag[][];

      /** JSDoc description. */
      description?: string | null;

      /** JSDoc tags. */
      jsDocTags?: IJsDocTagInfo[];
    }
  }

  /** Template literal type metadata. */
  export interface ITemplate {
    /** Template parts as schemas. */
    row: IMetadataSchema[];

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }

  /** Escaped type metadata (for special transformations). */
  export interface IEscaped {
    /** Original type before escaping. */
    original: IMetadataSchema;

    /** Transformed return type. */
    returns: IMetadataSchema;
  }

  /** Type alias definition. */
  export interface IAliasType {
    /** Alias name. */
    name: string;

    /** Underlying type schema. */
    value: IMetadataSchema;

    /** Nullability per reference site. */
    nullables: boolean[];

    /** JSDoc description. */
    description: string | null;

    /** JSDoc tags. */
    jsDocTags: IJsDocTagInfo[];

    /** Whether the alias is recursive. */
    recursive: boolean;
  }

  /** Array type definition. */
  export interface IArrayType {
    /** Array type name. */
    name: string;

    /** Element type schema. */
    value: IMetadataSchema;

    /** Nullability per reference site. */
    nullables: boolean[];

    /** Whether the array type is recursive. */
    recursive: boolean;

    /** Index in components (for deduplication). */
    index: number | null;
  }

  /** Tuple type definition. */
  export interface ITupleType {
    /** Tuple type name. */
    name: string;

    /** Element schemas in order. */
    elements: IMetadataSchema[];

    /** Index in components (for deduplication). */
    index: number | null;

    /** Whether the tuple type is recursive. */
    recursive: boolean;

    /** Nullability per reference site. */
    nullables: boolean[];
  }

  /** Object type definition. */
  export interface IObjectType {
    /** Object type name. */
    name: string;

    /** Object properties. */
    properties: IProperty[];

    /** JSDoc description. */
    description?: undefined | string;

    /** JSDoc tags. */
    jsDocTags: IJsDocTagInfo[];

    /** Index in components (for deduplication). */
    index: number;

    /** Whether the object type is recursive. */
    recursive: boolean;

    /** Nullability per reference site. */
    nullables: boolean[];
  }

  /** Object property metadata. */
  export interface IProperty {
    /** Property key schema (string or symbol). */
    key: IMetadataSchema;

    /** Property value schema. */
    value: IMetadataSchema;

    /** JSDoc description. */
    description: string | null;

    /** JSDoc tags. */
    jsDocTags: IJsDocTagInfo[];

    /** Property mutability (`readonly` or mutable). */
    mutability?: "readonly" | null | undefined;
  }

  /** Map type metadata. */
  export interface IMap {
    /** Key type schema. */
    key: IMetadataSchema;

    /** Value type schema. */
    value: IMetadataSchema;

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }

  /** Set type metadata. */
  export interface ISet {
    /** Element type schema. */
    value: IMetadataSchema;

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }

  /** Reference to a named type in components. */
  export interface IReference {
    /** Referenced type name. */
    name: string;

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }
}
