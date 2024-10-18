import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";

import { ProtobufAtomic } from "../../typings/ProtobufAtomic";

export namespace ProtobufUtil {
  export const isStaticObject = (obj: MetadataObjectType): boolean =>
    obj.properties.length >= 1 &&
    obj.properties.every((p) => p.key.isSoleLiteral());

  export const size = (meta: Metadata): number =>
    getAtomics(meta).size +
    meta.arrays.length +
    meta.tuples.length +
    meta.natives.length +
    meta.objects.length +
    meta.maps.length;

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

  export const isUnion = (meta: Metadata): boolean => size(meta) > 1;

  export const getAtomics = (
    meta: Metadata,
    union?: Map<string, number | null>,
  ): Map<string, number | null> => {
    const map: Map<ProtobufAtomic, number | null> = union ?? new Map();

    // CONSTANTS
    for (const c of meta.constants)
      if (c.type === "boolean")
        map.set("bool", getSequence(c.values[0]?.tags[0] ?? []));
      else if (c.type === "bigint") {
        const init: ProtobufAtomic.BigNumeric = deduce_bigint_type(
          c.values.map((v) => BigInt(v.value)),
        );
        for (const value of c.values)
          decode_bigint({
            map,
            tags: value.tags,
            default: init,
          });
      } else if (c.type === "number") {
        const init: ProtobufAtomic.Numeric = deduce_numeric_type(
          c.values.map((v) => v.value) as number[],
        );
        for (const value of c.values)
          decode_number({
            map,
            tags: value.tags,
            default: init,
          });
      } else if (c.type === "string")
        map.set("string", getSequence(c.values[0]?.tags[0] ?? []));
    if (meta.templates.length)
      map.set("string", getSequence(meta.templates[0]?.tags[0] ?? []));

    // ATOMICS
    for (const atomic of meta.atomics)
      if (atomic.type === "boolean")
        map.set("bool", getSequence(atomic.tags[0] ?? []));
      else if (atomic.type === "bigint")
        decode_bigint({
          map,
          tags: atomic.tags,
          default: "int64",
        });
      else if (atomic.type === "number")
        decode_number({
          map,
          tags: atomic.tags,
          default: "double",
        });
      else if (atomic.type === "string")
        map.set("string", getSequence(atomic.tags[0] ?? []));

    // SORTING IF REQUIRED
    if (Array.from(map.values()).some((v) => v === null)) arrange(map);
    return map;
  };

  export const getNumbers = (
    meta: Metadata,
    union?: Map<string, number | null>,
  ): Map<string, number | null> => {
    const map: Map<ProtobufAtomic.Numeric, number | null> = union ?? new Map();
    for (const c of meta.constants)
      if (c.type === "number") {
        const init: ProtobufAtomic.Numeric = deduce_numeric_type(
          c.values.map((v) => v.value) as number[],
        );
        for (const value of c.values)
          decode_number({
            map,
            tags: value.tags,
            default: init,
          });
      }
    for (const atomic of meta.atomics)
      if (atomic.type === "number")
        decode_number({
          map,
          tags: atomic.tags,
          default: "double",
        });
    if (Array.from(map.values()).some((v) => v === null)) arrange(map);
    return map;
  };

  export const getBigints = (
    meta: Metadata,
    union?: Map<string, number | null>,
  ): Map<string, number | null> => {
    const map: Map<ProtobufAtomic.BigNumeric, number | null> =
      union ?? new Map();
    for (const c of meta.constants)
      if (c.type === "bigint") {
        const init: ProtobufAtomic.BigNumeric = deduce_bigint_type(
          c.values.map((v) => BigInt(v.value)),
        );
        for (const value of c.values)
          decode_bigint({
            map,
            tags: value.tags,
            default: init,
          });
      }
    for (const atomic of meta.atomics)
      if (atomic.type === "bigint")
        decode_bigint({
          map,
          tags: atomic.tags,
          default: "int64",
        });
    if (Array.from(map.values()).some((v) => v === null)) arrange(map);
    return map;
  };

  const arrange = (map: Map<ProtobufAtomic, number | null>): void => {
    const entries = Array.from(map.entries()).sort((a, b) =>
      compare(a[0], b[0]),
    );
    map.clear();
    for (const [key, value] of entries) map.set(key, value);
  };

  export const compare = (x: ProtobufAtomic, y: ProtobufAtomic): number =>
    ATOMIC_ORDER.get(x)! - ATOMIC_ORDER.get(y)!;
}

const ATOMIC_ORDER = new Map<ProtobufAtomic, number>(
  (
    [
      "bool",
      "int32",
      "uint32",
      "int64",
      "uint64",
      "float",
      "double",
      "string",
    ] as const
  ).map((str, i) => [str, i]),
);

const deduce_bigint_type = (values: bigint[]): ProtobufAtomic.BigNumeric =>
  values.some((v) => v < 0) ? "int64" : "uint64";
const deduce_numeric_type = (values: number[]): ProtobufAtomic.Numeric =>
  values.every((v) => Math.floor(v) === v)
    ? values.every((v) => -2147483648 <= v && v <= 2147483647)
      ? "int32"
      : "int64"
    : "double";

const decode_bigint = (next: {
  map: Map<ProtobufAtomic, number | null>;
  tags: IMetadataTypeTag[][];
  default: ProtobufAtomic.BigNumeric;
}): void => {
  if (next.tags.length === 0) {
    next.map.set(next.default, null);
    return;
  }
  for (const row of next.tags) {
    const value: ProtobufAtomic.BigNumeric | undefined = row.find(
      (tag) =>
        tag.kind === "type" &&
        (tag.value === "int64" || tag.value === "uint64"),
    )?.value;
    next.map.set(value ?? "int64", ProtobufUtil.getSequence(row));
  }
};

const decode_number = (next: {
  map: Map<ProtobufAtomic, number | null>;
  tags: IMetadataTypeTag[][];
  default: ProtobufAtomic.Numeric;
}): void => {
  if (next.tags.length === 0) {
    next.map.set(next.default, null);
    return;
  }
  for (const row of next.tags) {
    const value: ProtobufAtomic.Numeric | undefined = row.find(
      (tag) =>
        tag.kind === "type" &&
        (tag.value === "int32" ||
          tag.value === "uint32" ||
          tag.value === "int64" ||
          tag.value === "uint64" ||
          tag.value === "float" ||
          tag.value === "double"),
    )?.value;
    next.map.set(value ?? "double", ProtobufUtil.getSequence(row));
  }
};
