import { Atomic } from "../typings/Atomic";
import { IJsDocTagInfo } from "./IJsDocTagInfo";
import { IMetadataTypeTag } from "./IMetadataTypeTag";

/**
 * Metadata schema representing a TypeScript type's structure.
 *
 * `IMetadataSchema` is typia's internal type representation, capturing full
 * TypeScript type information including unions, optionality, nullability, and
 * type constraints. Used by `typia.reflect.schema<T>()` for runtime type
 * introspection.
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
 *
 * @evidence contracts/common.md#principled-implementation A union-typed value is stored as parallel lists, one per type category, so every member of the union is present with the flags for any, required, optional and nullable; a type that is none of those lists is simply empty. Named types are references into the components table, which lets recursion terminate. `escaped` and `rest` are null when absent.
 * @evidence contracts/common.md#clear-and-simple-design The namespace contains one small interface per category, and the main interface lists the categories in the order its comment groups them, so each category can be consumed separately.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It describes the shape typia's native reflection emits and adds no inference or normalization of its own.
 * @evidence contracts/common.md#meaningful-documentation The comment groups the categories with links to each list and explains this is the type representation used by `typia.reflect.schema`; each field has its own comment.
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
  /**
   * Function type metadata.
   *
   * @evidence contracts/common.md#principled-implementation A function member records whether it is async, its parameter metadata and a return schema, which is all the metadata consumers need to describe a callable without the original declaration.
   * @evidence contracts/common.md#clear-and-simple-design Three fields; parameters have their own record because they carry names and documentation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Plain data with no inference of async-ness beyond what the producer records.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment states the record's purpose and each field is documented.
   */
  export interface IFunction {
    /** Whether the function is async. */
    async: boolean;

    /** Function parameters. */
    parameters: IParameter[];

    /** Return type schema. */
    output: IMetadataSchema;
  }

  /**
   * Function parameter metadata.
   *
   * @evidence contracts/common.md#principled-implementation A parameter keeps its name, type schema, JSDoc description (or null) and tags, so documentation travels with the signature.
   * @evidence contracts/common.md#clear-and-simple-design Four required fields, no optional state.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record only.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and every field has a comment.
   */
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

  /**
   * Primitive atomic type metadata.
   *
   * @evidence contracts/common.md#principled-implementation The `type` literal limits the category to the four atomics, and each entry has a list of tag groups; the outer array allows several alternative tag combinations for the same atomic category, each group being the tags applied together.
   * @evidence contracts/common.md#clear-and-simple-design Two fields; the nested tag arrays mirror how a union of tagged primitives distributes.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record with no constraint evaluation.
   * @evidence contracts/common.md#meaningful-documentation The comment states the record's meaning; the tag member explains alternative rows and the conjunction within each row.
   */
  export interface IAtomic {
    /** Primitive type kind. */
    type: "boolean" | "bigint" | "number" | "string";

    /** Alternative constraint groups; all tags within one group apply together. */
    tags: IMetadataTypeTag[][];
  }

  /**
   * Literal constant type metadata.
   *
   * @evidence contracts/common.md#principled-implementation Constants are a union of one base interface per literal kind, so each entry's `values` is typed by that kind through `Atomic.Mapper`, which prevents mixing a string list under a number type.
   * @evidence contracts/common.md#clear-and-simple-design The union and its namespace of base and value records keep the four literal kinds in one shape generated from a parameter.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A representation only; it does not validate literal values.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and the namespace members document the base and value shapes.
   */
  export type IConstant =
    | IConstant.IBase<"boolean">
    | IConstant.IBase<"number">
    | IConstant.IBase<"string">
    | IConstant.IBase<"bigint">;
  export namespace IConstant {
    /**
     * Base interface for constant types.
     *
     * @evidence contracts/common.md#principled-implementation The type parameter, bounded by Atomic.Literal, selects both the discriminating `type` value and the element type of `values` through the Atomic.Mapper table, so the pair stays consistent.
     * @evidence contracts/common.md#clear-and-simple-design One generic interface in place of four near-identical ones.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A type-level pairing with no runtime component.
     * @evidence contracts/common.md#meaningful-documentation The comment states that it is the base for constant types and each field is described.
     */
    export interface IBase<Type extends Atomic.Literal> {
      /** Constant type kind. */
      type: Type;

      /** Literal values in the union. */
      values: IValue<Atomic.Mapper[Type]>[];
    }

    /**
     * Single constant value metadata.
     *
     * @evidence contracts/common.md#principled-implementation Each literal keeps its value, the tag groups applied to it and optional documentation, with documentation optional because many literals have none. The bound `Atomic.Type` limits values to boolean, number, string and bigint.
     * @evidence contracts/common.md#clear-and-simple-design A small record per literal, which allows tags and descriptions to differ between literals in the same union.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts Plain data without constant folding or coercion.
     * @evidence contracts/common.md#meaningful-documentation The comment states that it is one constant value and the fields document tags and JSDoc.
     */
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

  /**
   * Template literal type metadata.
   *
   * @evidence contracts/common.md#principled-implementation A template literal type is a sequence of schemas, the `row`, that concatenate in order, plus tag groups; this is how a template mixes literal text and typed slots.
   * @evidence contracts/common.md#clear-and-simple-design Two fields only.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record with no pattern building; the pattern is produced by consumers from the row.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and both fields are documented.
   */
  export interface ITemplate {
    /** Template parts as schemas. */
    row: IMetadataSchema[];

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }

  /**
   * Escaped type metadata (for special transformations).
   *
   * @evidence contracts/common.md#principled-implementation For a type whose class method `toJSON` changes its serialized form, the record keeps the original schema and the schema of the `toJSON` return value together, so consumers can validate one and serialize as the other.
   * @evidence contracts/common.md#clear-and-simple-design Two schema fields, with a null `escaped` on the parent when no escape exists.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It records the transformation and does not apply it.
   * @evidence contracts/common.md#meaningful-documentation The comment says it covers special transformations and each side is described.
   */
  export interface IEscaped {
    /** Original type before escaping. */
    original: IMetadataSchema;

    /** Transformed return type. */
    returns: IMetadataSchema;
  }

  /**
   * Type alias definition.
   *
   * @evidence contracts/common.md#principled-implementation An alias definition holds its name, the schema it names, per-reference nullability, optional documentation and a recursion flag, enough to represent a possibly recursive alias in the components table once.
   * @evidence contracts/common.md#clear-and-simple-design Plain fields; `nullables` are per reference site and kept with the definition because the table is shared.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only, with recursion computed by the producer rather than inferred by the type.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and each field is documented, including the recursion and nullability meaning.
   */
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

  /**
   * Array type definition.
   *
   * @evidence contracts/common.md#principled-implementation An array definition has a name, an element schema, per-site nullability, a recursion flag and a nullable index into the components, so repeated array types are stored once.
   * @evidence contracts/common.md#clear-and-simple-design One record; the index is nullable because a definition may not yet be registered.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only; indexing is done by the producer.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and each field is documented.
   */
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

  /**
   * Tuple type definition.
   *
   * @evidence contracts/common.md#principled-implementation A tuple definition lists element schemas in order, plus name, index, recursion and nullability, representing positions by array order; rest elements live on the element schema's `rest` field.
   * @evidence contracts/common.md#clear-and-simple-design A record mirroring IArrayType with element lists in place of a single element.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and the fields are documented, including ordering.
   */
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

  /**
   * Object type definition.
   *
   * @evidence contracts/common.md#principled-implementation An object definition lists its properties as key and value schema pairs, with documentation, an index, recursion and nullability. Key schemas represent literal and dynamic string/number keys; native object analysis omits symbol-keyed members rather than representing them here.
   * @evidence contracts/common.md#clear-and-simple-design One record per object type; properties are separate records so they carry their own documentation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only; no property ordering or optionality is inferred.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and every field is documented; the key-as-schema choice is explained at IProperty.
   */
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

  /**
   * Object property metadata.
   *
   * @evidence contracts/common.md#principled-implementation A property's key is itself an IMetadataSchema, so literal keys, template keys and index signatures are all expressed by one mechanism, and mutability marks readonly members while remaining optional on the record.
   * @evidence contracts/common.md#clear-and-simple-design Five fields with `mutability` optional because mutable is the default.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only.
   * @evidence contracts/common.md#meaningful-documentation The comment identifies object property metadata; member comments describe literal or dynamic string/number keys, value schema, JSDoc and the optional readonly marker.
   */
  export interface IProperty {
    /** Property key schema for literal or dynamic string/number keys. */
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

  /**
   * Map type metadata.
   *
   * @evidence contracts/common.md#principled-implementation A map member has key and value schemas and tag groups, because tags may apply to the map type itself.
   * @evidence contracts/common.md#clear-and-simple-design Three fields, parallel to ISet.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and each field is described.
   */
  export interface IMap {
    /** Key type schema. */
    key: IMetadataSchema;

    /** Value type schema. */
    value: IMetadataSchema;

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }

  /**
   * Set type metadata.
   *
   * @evidence contracts/common.md#principled-implementation A set member has an element schema and tag groups, as in IMap.
   * @evidence contracts/common.md#clear-and-simple-design Two fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only.
   * @evidence contracts/common.md#meaningful-documentation The comment states the purpose and each field is described.
   */
  export interface ISet {
    /** Element type schema. */
    value: IMetadataSchema;

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }

  /**
   * Reference to a named type in components.
   *
   * @evidence contracts/common.md#principled-implementation A reference points to a named component by name and carries the tag groups at that use site, which is where tags differ even when the target is shared.
   * @evidence contracts/common.md#clear-and-simple-design Two fields; the definition lives in IMetadataComponents so the reference stays small.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Data only; resolution of the name is a consumer concern.
   * @evidence contracts/common.md#meaningful-documentation The comment states that it refers to a named type in the components and the fields are described.
   */
  export interface IReference {
    /** Referenced type name. */
    name: string;

    /** Type constraint tags. */
    tags: IMetadataTypeTag[][];
  }
}
