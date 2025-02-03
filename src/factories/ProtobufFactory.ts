import ts from "typescript";

import { IMetadataTypeTag } from "../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../schemas/metadata/Metadata";
import { MetadataObjectType } from "../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../schemas/metadata/MetadataProperty";
import { IProtobufProperty } from "../schemas/protobuf/IProtobufProperty";
import { IProtobufPropertyType } from "../schemas/protobuf/IProtobufPropertyType";
import { IProtobufSchema } from "../schemas/protobuf/IProtobufSchema";

import { ProtobufUtil } from "../programmers/helpers/ProtobufUtil";

import { TransformerError } from "../transformers/TransformerError";

import { ProtobufAtomic } from "../typings/ProtobufAtomic";
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

  /**
   * @internal
   */
  export const emplaceObject = (object: MetadataObjectType): void => {
    for (const p of object.properties) emplaceProperty(p);
    const properties: IProtobufProperty[] = object.properties
      .map((p) => p.of_protobuf_)
      .filter((p) => p !== undefined);
    const unique: Set<number> = new Set(
      properties
        .filter((p) => p !== undefined)
        .filter((p) => p.fixed === true)
        .map((p) => p.union.map((u) => u.index))
        .flat(),
    );
    let index: number = 1;
    properties.forEach((schema) => {
      if (schema.fixed === true)
        index = Math.max(
          index,
          Math.max(...schema.union.map((u) => u.index)) + 1,
        );
      else {
        for (const u of schema.union) {
          while (unique.has(index) === true) ++index;
          u.index = index;
          unique.add(index);
        }
        ++index;
      }
    });
  };

  const emplaceProperty = (prop: MetadataProperty): void => {
    const union: IProtobufPropertyType[] = [];
    for (const native of prop.value.natives)
      if (native.name === "Uint8Array")
        union.push({
          type: "bytes",
          index: ProtobufUtil.getSequence(native.tags[0] ?? [])!,
        });
    union.push(...emplaceAtomic(prop.value).values());
    for (const array of prop.value.arrays)
      union.push({
        type: "array",
        array: array.type,
        value: emplaceSchema(
          array.type.value,
        ) as IProtobufSchema.IArray["value"],
        index: ProtobufUtil.getSequence(array.tags[0] ?? [])!,
      });
    for (const obj of prop.value.objects)
      if (isDynamicObject(obj.type))
        union.push({
          type: "map",
          map: obj.type,
          key: emplaceSchema(
            obj.type.properties[0]!.key,
          ) as IProtobufSchema.IMap["key"],
          value: emplaceSchema(
            obj.type.properties[0]!.value,
          ) as IProtobufSchema.IMap["value"],
          index: ProtobufUtil.getSequence(obj.tags[0] ?? [])!,
        });
      else
        union.push({
          type: "object",
          object: obj.type,
          index: ProtobufUtil.getSequence(obj.tags[0] ?? [])!,
        });
    for (const map of prop.value.maps)
      union.push({
        type: "map",
        map,
        key: emplaceSchema(map.key) as IProtobufSchema.IMap["key"],
        value: emplaceSchema(map.value) as IProtobufSchema.IMap["value"],
        index: ProtobufUtil.getSequence(map.tags[0] ?? [])!,
      });
    prop.of_protobuf_ = {
      union,
      fixed: union.every((p) => p.index !== null),
    };
  };

  const emplaceSchema = (metadata: Metadata): IProtobufSchema => {
    for (const native of metadata.natives)
      if (native.name === "Uint8Array")
        return {
          type: "bytes",
        };
    const atomic = emplaceAtomic(metadata);
    if (atomic.size) return atomic.values().next().value!;
    for (const array of metadata.arrays)
      return {
        type: "array",
        array: array.type,
        value: emplaceSchema(
          array.type.value,
        ) as IProtobufSchema.IArray["value"],
      };
    for (const obj of metadata.objects)
      if (isDynamicObject(obj.type))
        return {
          type: "map",
          map: obj.type,
          key: emplaceSchema(
            obj.type.properties[0]!.key,
          ) as IProtobufSchema.IMap["key"],
          value: emplaceSchema(
            obj.type.properties[0]!.value,
          ) as IProtobufSchema.IMap["value"],
        };
      else
        return {
          type: "object",
          object: obj.type,
        };
    for (const map of metadata.maps)
      return {
        type: "map",
        map,
        key: emplaceSchema(map.key) as IProtobufSchema.IMap["key"],
        value: emplaceSchema(map.value) as IProtobufSchema.IMap["value"],
      };
    throw new Error(
      "Error on ProtobufFactory.emplaceSchema(): any type detected.",
    );
  };

  const emplaceAtomic = (
    meta: Metadata,
  ): Map<ProtobufAtomic, IProtobufPropertyType> => {
    const map: Map<ProtobufAtomic, IProtobufPropertyType> = new Map();

    // CONSTANTS
    for (const c of meta.constants)
      if (c.type === "boolean")
        map.set("bool", {
          type: "bool",
          index: getSequence(c.values[0]?.tags[0] ?? [])!,
        });
      else if (c.type === "bigint") {
        const init: ProtobufAtomic.BigNumeric = getBigintType(
          c.values.map((v) => BigInt(v.value)),
        );
        for (const value of c.values)
          emplaceBigint({
            map,
            tags: value.tags,
            init,
          });
      } else if (c.type === "number") {
        const init: ProtobufAtomic.Numeric = getNumberType(
          c.values.map((v) => v.value) as number[],
        );
        for (const value of c.values)
          emplaceNumber({
            map,
            tags: value.tags,
            init,
          });
      } else if (c.type === "string")
        map.set("string", {
          type: "string",
          index: getSequence(c.values[0]?.tags[0] ?? [])!,
        });

    // TEMPLATE
    if (meta.templates.length)
      map.set("string", {
        type: "string",
        index: getSequence(meta.templates[0]?.tags[0] ?? [])!,
      });

    // ATOMICS
    for (const atomic of meta.atomics)
      if (atomic.type === "boolean")
        map.set("bool", {
          type: "bool",
          index: getSequence(atomic.tags[0] ?? [])!,
        });
      else if (atomic.type === "bigint")
        emplaceBigint({
          map,
          tags: atomic.tags,
          init: "int64",
        });
      else if (atomic.type === "number")
        emplaceNumber({
          map,
          tags: atomic.tags,
          init: "double",
        });
      else if (atomic.type === "string")
        map.set("string", {
          type: "string",
          index: getSequence(atomic.tags[0] ?? [])!,
        });

    // SORTING FOR VALIDATION REASON
    return new Map(
      Array.from(map).sort((x, y) => ProtobufUtil.compare(x[0], y[0])),
    );
  };

  const emplaceBigint = (next: {
    map: Map<ProtobufAtomic, IProtobufPropertyType>;
    tags: IMetadataTypeTag[][];
    init: ProtobufAtomic.BigNumeric;
  }): void => {
    if (next.tags.length === 0) {
      next.map.set(next.init, {
        type: "bigint",
        name: next.init,
        index: null!,
      });
      return;
    }
    for (const row of next.tags) {
      const value: ProtobufAtomic.BigNumeric =
        row.find(
          (tag) =>
            tag.kind === "type" &&
            (tag.value === "int64" || tag.value === "uint64"),
        )?.value ?? next.init;
      next.map.set(next.init, {
        type: "bigint",
        name: value,
        index: ProtobufUtil.getSequence(row)!,
      });
    }
  };

  const emplaceNumber = (next: {
    map: Map<ProtobufAtomic, IProtobufPropertyType>;
    tags: IMetadataTypeTag[][];
    init: ProtobufAtomic.Numeric;
  }): void => {
    if (next.tags.length === 0) {
      next.map.set(next.init, {
        type: "number",
        name: next.init,
        index: null!,
      });
      return;
    }
    for (const row of next.tags) {
      const value: ProtobufAtomic.Numeric =
        row.find(
          (tag) =>
            tag.kind === "type" &&
            (tag.value === "int32" ||
              tag.value === "uint32" ||
              tag.value === "int64" ||
              tag.value === "uint64" ||
              tag.value === "float" ||
              tag.value === "double"),
        )?.value ?? next.init;
      next.map.set(value, {
        type: "number",
        name: value,
        index: ProtobufUtil.getSequence(row)!,
      });
    }
  };

  const getBigintType = (values: bigint[]): ProtobufAtomic.BigNumeric =>
    values.some((v) => v < 0) ? "int64" : "uint64";

  const getNumberType = (values: number[]): ProtobufAtomic.Numeric =>
    values.every((v) => Math.floor(v) === v)
      ? values.every((v) => -2147483648 <= v && v <= 2147483647)
        ? "int32"
        : "int64"
      : "double";

  const getSequence = (tags: IMetadataTypeTag[]): number | null => {
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
      for (const obj of meta.objects) {
        if (visited.has(obj.type)) continue;
        visited.add(obj.type);
        validateObject({
          object: obj.type,
          errors,
        });
        try {
          emplaceObject(obj.type);
        } catch {}
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
          if (numbers.has(type) && bigints.has(type))
            insert(
              `tags.Type<"${type}"> cannot be used in both number and bigint types. Recommend to remove from number type`,
            );
      }
      //----
      // ARRAY CASES
      //----
      // DO NOT ALLOW MULTI-DIMENSIONAL ARRAY
      if (
        meta.arrays.length &&
        meta.arrays.some((array) => !!array.type.value.arrays.length)
      )
        noSupport("over two dimensional array type");
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
      // UNION WITH DYNAMIC OBJECTTa
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
        meta.maps.some((m) => ProtobufUtil.getAtomics(m.key).size !== 1)
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

  /* -----------------------------------------------------------
    SEQUENE VALIDATOR
  ----------------------------------------------------------- */
  const validateObject = (next: {
    object: MetadataObjectType;
    errors: string[];
  }): void => {
    for (const property of next.object.properties)
      validateProperty({
        metadata: property.value,
        errors: next.errors,
      });

    const entire: Map<number, string> = new Map();
    const visitProperty = (p: MetadataProperty) => {
      const local: Set<number> = new Set();
      const tagger = (matrix: IMetadataTypeTag[][]): void => {
        matrix.forEach((tags) => {
          const value: number | null = ProtobufUtil.getSequence(tags);
          if (value !== null) local.add(value);
        });
      };
      for (const c of p.value.constants)
        for (const v of c.values) tagger(v.tags);
      for (const a of p.value.atomics) tagger(a.tags);
      for (const t of p.value.templates) tagger(t.tags);
      for (const o of p.value.objects) tagger(o.tags);
      for (const a of p.value.arrays) tagger(a.tags);
      for (const s of local)
        if (entire.has(s))
          next.errors.push(
            `The Sequence<${s}> tag is duplicated in two properties (${JSON.stringify(entire.get(s))} and ${JSON.stringify(p.key.getSoleLiteral())})`,
          );
        else entire.set(s, p.key.getSoleLiteral()!);
    };
    for (const p of next.object.properties) visitProperty(p);
  };

  const validateProperty = (next: {
    metadata: Metadata;
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
      validator({ metadata: next.metadata, errors: next.errors, add });
    for (const array of next.metadata.arrays)
      validateInstanceSequence({
        type: "array",
        tags: array.tags,
        errors: next.errors,
        add,
      });
    for (const object of next.metadata.objects)
      validateInstanceSequence({
        type: "object",
        tags: object.tags,
        errors: next.errors,
        add,
      });
    for (const map of next.metadata.maps)
      validateInstanceSequence({
        type: "map",
        tags: map.tags,
        errors: next.errors,
        add,
      });
    for (const native of next.metadata.natives)
      if (native.name === "Uint8Array")
        validateInstanceSequence({
          type: "Uint8Array",
          tags: native.tags,
          errors: next.errors,
          add,
        });
  };

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
          const sequence = ProtobufUtil.getSequence([tag]);
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
          const sequence: number | null = ProtobufUtil.getSequence(tags);
          if (sequence !== null) {
            unique.add(sequence);
            ++actual;
          }
          ++expected;
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

        if (unique.size && actual !== expected) {
          next.errors.push(
            `The sequence tag must be declared in every union type members`,
          );
        } else if (unique.size > 1)
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
          const sequence = ProtobufUtil.getSequence([tag]);
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
      const value: number | null = ProtobufUtil.getSequence(tags);
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
