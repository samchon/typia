import ts from "typescript";

import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";

import { ProtobufUtil } from "../programmers/helpers/ProtobufUtil";

import { TransformerError } from "../transformers/TransformerError";

import { ValidationPipe } from "../typings/ValidationPipe";

import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";

export namespace ProtobufFactory {
  export interface IProps {
    method: string;
    checker: ts.TypeChecker;
    transformer?: ts.TransformationContext;
    collection: MetadataCollection;
    type: ts.Type;
  }

  /* -----------------------------------------------------------
    METADATA COMPOSER
  ----------------------------------------------------------- */
  export const metadata = (props: IProps): Metadata => {
    // COMPOSE METADATA WITH INDIVIDUAL VALIDATIONS
    const result: ValidationPipe<Metadata, MetadataFactory.IError> =
      MetadataFactory.analyze({
        ...props,
        transformer: props.transformer,
        options: {
          escape: false,
          constant: true,
          absorb: true,
          validate: validate(),
        },
      });
    if (result.success === false)
      throw TransformerError.from({
        code: `typia.protobuf.${props.method}`,
        errors: result.errors,
      });
    return result.data;
  };

  export const getSequence = (tags: IMetadataTypeTag[]): number | null => {
    const sequence = tags.find(
      (t) =>
        t.kind === "sequence" &&
        typeof (t.schema as any)?.["x-protobuf-sequence"] === "number",
    );
    if (sequence === undefined) return null;
    const value: number = Number(
      (sequence.schema as any)["x-protobuf-sequence"],
    );
    return Number.isNaN(value) ? null : value;
  };

  /* -----------------------------------------------------------
    VALIDATORS
  ----------------------------------------------------------- */
  const validate = () => {
    const visited: WeakSet<MetadataObjectType> = new WeakSet();
    return (meta: Metadata, explore: MetadataFactory.IExplore): string[] => {
      const errors: string[] = [];
      const insert = (msg: string) => errors.push(msg);

      if (explore.top === true) {
        const onlyObject: boolean =
          meta.size() === 1 &&
          meta.objects.length === 1 &&
          meta.objects[0]!.type.properties.every((p) =>
            p.key.isSoleLiteral(),
          ) &&
          meta.isRequired() === true &&
          meta.nullable === false;
        if (onlyObject === false)
          insert("target type must be a sole and static object type");
      }
      if (explore.object !== null && visited.has(explore.object) === false) {
        visited.add(explore.object);
        validateObject({
          object: explore.object,
          errors,
        });
        for (const p of explore.object.properties)
          validateProperty({
            object: explore.object,
            value: p.value,
            errors,
          });
      }

      //----
      // NOT SUPPORTED TYPES
      //----
      const noSupport = (msg: string) => insert(`does not support ${msg}`);

      // PROHIBIT ANY TYPE
      if (meta.any) noSupport("any type");
      // PROHIBIT FUNCTIONAL TYPE
      if (meta.functions.length) noSupport("functional type");
      // PROHIBIT TUPLE TYPE
      if (meta.tuples.length) noSupport("tuple type");
      // PROHIBIT SET TYPE
      if (meta.sets.length) noSupport("Set type");
      // NATIVE TYPE, BUT NOT Uint8Array
      if (meta.natives.length)
        for (const native of meta.natives) {
          if (native.name === "Uint8Array") continue;

          const instead = BANNED_NATIVE_TYPES.get(native.name);
          if (instead === undefined) noSupport(`${native.name} type`);
          else noSupport(`${native.name} type. Use ${instead} type instead.`);
        }
      //----
      // ATOMIC CASES
      //----
      if (meta.atomics.length) {
        const numbers = ProtobufUtil.getNumbers(meta);
        const bigints = ProtobufUtil.getBigints(meta);

        for (const type of ["int64", "uint64"])
          if (
            numbers.some((n) => n === type) &&
            bigints.some((b) => b === type)
          )
            insert(
              `tags.Type<"${type}"> cannot be used in both number and bigint types. Recommend to remove from number type`,
            );
      }
      //----
      // ARRRAY CASES
      //----
      // DO NOT ALLOW MULTI-DIMENTIONAL ARRAY
      if (
        meta.arrays.length &&
        meta.arrays.some((array) => !!array.type.value.arrays.length)
      )
        noSupport("over two dimenstional array type");
      // CHILD OF ARRAY TYPE MUST BE REQUIRED
      if (
        meta.arrays.length &&
        meta.arrays.some(
          (array) =>
            array.type.value.isRequired() === false ||
            array.type.value.nullable === true,
        )
      )
        noSupport("optional type in array");
      // UNION IN ARRAY
      if (
        meta.arrays.length &&
        meta.arrays.some(
          (a) =>
            a.type.value.size() > 1 &&
            a.type.value.constants.length !== 1 &&
            a.type.value.constants[0]?.values.length !== a.type.value.size(),
        )
      )
        noSupport("union type in array");
      // DO DYNAMIC OBJECT IN ARRAY
      if (
        meta.arrays.length &&
        meta.arrays.some(
          (a) =>
            a.type.value.maps.length ||
            (a.type.value.objects.length &&
              a.type.value.objects.some(
                (o) => ProtobufUtil.isStaticObject(o.type) === false,
              )),
        )
      )
        noSupport("dynamic object in array");
      // UNION WITH ARRAY
      if (meta.size() > 1 && meta.arrays.length)
        noSupport("union type with array type");
      //----
      // OBJECT CASES
      //----
      // EMPTY PROPERTY
      if (
        meta.objects.length &&
        meta.objects.some((obj) => obj.type.properties.length === 0)
      )
        noSupport("empty object type");
      // MULTIPLE DYNAMIC KEY TYPED PROPERTIES
      if (
        meta.objects.length &&
        meta.objects.some(
          (obj) =>
            obj.type.properties.filter((p) => !p.key.isSoleLiteral()).length >
            1,
        )
      )
        noSupport(
          "object type with multiple dynamic key typed properties. Keep only one.",
        );
      // STATIC AND DYNAMIC PROPERTIES ARE COMPATIBLE
      if (
        meta.objects.length &&
        meta.objects.some(
          (obj) =>
            obj.type.properties.some((p) => p.key.isSoleLiteral()) &&
            obj.type.properties.some((p) => !p.key.isSoleLiteral()),
        )
      )
        noSupport(
          "object type with mixed static and dynamic key typed properties. Keep statics or dynamic only.",
        );
      // DYNAMIC OBJECT, BUT PROPERTY VALUE TYPE IS ARRAY
      if (
        meta.objects.length &&
        isDynamicObject(meta.objects[0]!.type) &&
        meta.objects[0]!.type.properties.some((p) => !!p.value.arrays.length)
      )
        noSupport("dynamic object with array value type");
      // UNION WITH DYNAMIC OBJECTa
      if (
        meta.size() > 1 &&
        meta.objects.length &&
        isDynamicObject(meta.objects[0]!.type)
      )
        noSupport("union type with dynamic object type");
      // UNION IN DYNAMIC PROPERTY VALUE
      if (
        meta.objects.length &&
        meta.objects.some(
          (obj) =>
            isDynamicObject(obj.type) &&
            obj.type.properties.some((p) => ProtobufUtil.isUnion(p.value)),
        )
      )
        noSupport("union type in dynamic property");
      //----
      // MAP CASES
      //----
      // KEY TYPE IS UNION
      if (
        meta.maps.length &&
        meta.maps.some((m) => ProtobufUtil.isUnion(m.key))
      )
        noSupport("union key typed map");
      // KEY TYPE IS NOT ATOMIC
      if (
        meta.maps.length &&
        meta.maps.some((m) => ProtobufUtil.getAtomics(m.key).length !== 1)
      )
        noSupport("non-atomic key typed map");
      // MAP TYPE, BUT PROPERTY KEY TYPE IS OPTIONAL
      if (
        meta.maps.length &&
        meta.maps.some((m) => m.key.isRequired() === false || m.key.nullable)
      )
        noSupport("optional key typed map");
      // MAP TYPE, BUT VALUE TYPE IS ARRAY
      if (meta.maps.length && meta.maps.some((m) => !!m.value.arrays.length))
        noSupport("map type with array value type");
      // UNION WITH MAP
      if (meta.size() > 1 && meta.maps.length)
        noSupport("union type with map type");
      // UNION IN MAP
      if (
        meta.maps.length &&
        meta.maps.some((m) => ProtobufUtil.isUnion(m.value))
      )
        noSupport("union type in map value type");
      return errors;
    };
  };

  const validateObject = (next: {
    object: MetadataObjectType;
    errors: string[];
  }): void => {
    const yes: string[] = [];
    const no: string[] = [];
    for (const p of next.object.properties) {
      const key: string | null = p.key.getSoleLiteral();
      if (key === null) continue;
      else if (p.value.isSequence()) yes.push(key);
      else no.push(key);
    }
    if (yes.length !== 0 && no.length !== 0)
      next.errors.push(
        `object type with mixed sequence and non-sequence properties. Keep sequence or non-sequence only (sequences: ${JSON.stringify(yes)}, non-sequences: ${JSON.stringify(no)})`,
      );
  };

  const validateProperty = (next: {
    object: MetadataObjectType;
    value: Metadata;
    errors: string[];
  }): void => {
    let expected: number = 0;
    const sequences: Set<number> = new Set();
    const add = (value: number): boolean => {
      if (sequences.has(value)) return false;
      sequences.add(value);
      ++expected;
      return true;
    };

    for (const validator of [
      validateBooleanSequence,
      validateNumericSequences({
        type: "bigint",
        default: "int64",
        categories: BIGINT_TYPES,
      }),
      validateNumericSequences({
        type: "number",
        default: "double",
        categories: NUMBER_TYPES,
      }),
      validateStringSequence,
    ])
      validator({ metadata: next.value, errors: next.errors, add });
    for (const array of next.value.arrays)
      validateInstanceSequence({
        type: "array",
        tags: array.tags,
        errors: next.errors,
        add,
      });
    for (const object of next.value.objects)
      validateInstanceSequence({
        type: "object",
        tags: object.tags,
        errors: next.errors,
        add,
      });
    for (const map of next.value.maps)
      validateInstanceSequence({
        type: "map",
        tags: map.tags,
        errors: next.errors,
        add,
      });
    for (const native of next.value.natives)
      if (native.name === "Uint8Array")
        validateInstanceSequence({
          type: "Uint8Array",
          tags: native.tags,
          errors: next.errors,
          add,
        });
  };

  /* -----------------------------------------------------------
    SPECIFIC PREDICATORS
  ----------------------------------------------------------- */
  const validateBooleanSequence = (next: {
    metadata: Metadata;
    errors: string[];
    add: (value: number) => boolean;
  }): void => {
    // PREPARE EMPLACER
    const unique: Set<number> = new Set();
    let expected: number = 0;
    let actual: number = 0;
    const emplace = (matrix: IMetadataTypeTag[][]): void => {
      for (const tags of matrix)
        for (const tag of tags) {
          const sequence = getSequence([tag]);
          if (sequence !== null) {
            unique.add(sequence);
            ++actual;
          }
          ++expected;
        }
    };

    // GATHER SEQUENCE TAGS
    for (const atomic of next.metadata.atomics)
      if (atomic.type === "boolean") emplace(atomic.tags);
    for (const constant of next.metadata.constants)
      if (constant.type === "boolean")
        for (const value of constant.values) emplace(value.tags);

    // PREDICATE
    if (unique.size && actual !== expected)
      next.errors.push(
        `The sequence tag must be declared in every union type members`,
      );
    else if (unique.size > 1)
      next.errors.push(
        `The sequence tag value must be the same in boolean type (including literal types)`,
      );
    else if (unique.size === 1) {
      const value: number = unique.values().next().value!;
      if (next.add(value) === false)
        next.errors.push(
          `The sequence tag value ${value} in boolean type is duplicated with other types`,
        );
    }
  };

  const validateNumericSequences =
    (config: {
      type: "number" | "bigint";
      default: string;
      categories: Set<string>;
    }) =>
    (next: {
      metadata: Metadata;
      errors: string[];
      add: (value: number) => boolean;
    }): void => {
      // FIND TYPE CATEGORIES
      const categories: Set<string> = new Set();
      const getType = (tags: IMetadataTypeTag[]): string => {
        const found: IMetadataTypeTag | undefined = tags.find(
          (t) => t.kind === "type" && config.categories.has(t.value),
        );
        return found?.value ?? config.default;
      };
      const exploreCategory = (matrix: IMetadataTypeTag[][]): void => {
        for (const tags of matrix) categories.add(getType(tags));
      };
      for (const atomic of next.metadata.atomics)
        if (atomic.type === config.type) exploreCategory(atomic.tags);
      for (const constant of next.metadata.constants)
        if (constant.type === config.type)
          for (const value of constant.values) exploreCategory(value.tags);

      // ITERATE TYPE CATEGORIES
      for (const category of categories) {
        const unique: Set<number> = new Set();
        let expected: number = 0;
        let actual: number = 0;
        const emplace = (tags: IMetadataTypeTag[]): void => {
          for (const t of tags) {
            const sequence = getSequence([t]);
            if (sequence !== null) {
              unique.add(sequence);
              ++actual;
            }
            ++expected;
          }
        };

        for (const atomic of next.metadata.atomics)
          if (atomic.type === config.type)
            for (const tags of atomic.tags)
              if (getType(tags) === category) emplace(tags);
        for (const constant of next.metadata.constants)
          if (constant.type === config.type)
            for (const value of constant.values)
              for (const tags of value.tags)
                if (getType(tags) === category) emplace(tags);

        if (unique.size && actual !== expected)
          next.errors.push(
            `The sequence tag must be declared in every union type members`,
          );
        else if (unique.size > 1)
          next.errors.push(
            `The sequence tag value must be the same in ${config.type} type (including literal types)`,
          );
        else if (unique.size === 1) {
          const value: number = unique.values().next().value!;
          if (next.add(value) === false)
            next.errors.push(
              `The sequence tag value ${value} in ${config.type} type is duplicated with other types`,
            );
        }
      }
    };

  const validateStringSequence = (next: {
    metadata: Metadata;
    errors: string[];
    add: (value: number) => boolean;
  }): void => {
    const unique: Set<number> = new Set();
    let expected: number = 0;
    let actual: number = 0;
    const emplace = (matrix: IMetadataTypeTag[][]): void => {
      for (const tags of matrix)
        for (const tag of tags) {
          const sequence = getSequence([tag]);
          if (sequence !== null) {
            unique.add(sequence);
            ++actual;
          }
          ++expected;
        }
    };
    for (const atomic of next.metadata.atomics)
      if (atomic.type === "string") emplace(atomic.tags);
    for (const constant of next.metadata.constants)
      if (constant.type === "string")
        for (const value of constant.values) emplace(value.tags);
    for (const template of next.metadata.templates) emplace(template.tags);

    if (unique.size && actual !== expected)
      next.errors.push(
        `The sequence tag must be declared in every union type members`,
      );
    else if (unique.size > 1)
      next.errors.push(
        `The sequence tag value must be the same in string types including literal and template types`,
      );
    else if (unique.size === 1) {
      const value: number = unique.values().next().value!;
      if (next.add(value) === false)
        next.errors.push(
          `The sequence tag value ${value} in string type is duplicated with other types`,
        );
    }
  };

  const validateInstanceSequence = (next: {
    type: "array" | "object" | "map" | "Uint8Array";
    tags: IMetadataTypeTag[][];
    errors: string[];
    add: (value: number) => boolean;
  }): void => {
    const unique: Set<number> = new Set();
    let count: number = 0;
    for (const tags of next.tags) {
      const value: number | null = getSequence(tags);
      if (value === null) continue;
      unique.add(value);
      ++count;
    }
    if (unique.size && count !== next.tags.length)
      next.errors.push(
        `The sequence tag must be declared in every union type members`,
      );
    else if (unique.size > 1)
      next.errors.push(
        `The sequence tag value must be the same in ${next.type === "array" ? "an array" : "object"} type.`,
      );
    else if (unique.size === 1) {
      const value: number = unique.values().next().value!;
      if (next.add(value) === false)
        next.errors.push(
          `The sequence tag value ${value} in ${next.type} type is duplicated with other types`,
        );
    }
  };
}

const isDynamicObject = (obj: MetadataObjectType): boolean =>
  obj.properties[0]!.key.isSoleLiteral() === false;

const BANNED_NATIVE_TYPES: Map<string, string | null> = new Map([
  ["Date", "string"],
  ["Boolean", "boolean"],
  ["BigInt", "bigint"],
  ["Number", "number"],
  ["String", "string"],
  ...[
    "Buffer",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigUint64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "BigInt64Array",
    "Float32Array",
    "Float64Array",
    "DataView",
    "ArrayBuffer",
    "SharedArrayBuffer",
  ].map((name) => [name, "Uint8Array"] as const),
  ["WeakSet", "Array"],
  ["WeakMap", "Map"],
]);
const NUMBER_TYPES: Set<string> = new Set([
  "int32",
  "uint32",
  "int64",
  "uint64",
  "float",
  "double",
]);
const BIGINT_TYPES = new Set(["int64", "uint64"]);
