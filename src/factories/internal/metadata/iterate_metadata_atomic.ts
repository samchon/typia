import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../../schemas/metadata/MetadataAtomic";

import { ArrayUtil } from "../../../utils/ArrayUtil";

const same = (type: ts.Type | null) => {
  if (type === null) return () => false;
  return (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
};

export const iterate_metadata_atomic = (props: {
  metadata: Metadata;
  type: ts.Type;
}): boolean => {
  // PREPARE INTERNAL FUNCTIONS
  const filter = same(props.type);
  const check = (info: IAtomicInfo) => {
    if (filter(info.atomic) || filter(info.literal)) {
      ArrayUtil.add(
        props.metadata.atomics,
        MetadataAtomic.create({ type: info.name, tags: [] }),
        (x, y) => x.type === y.type,
      );
      return true;
    }
    return false;
  };

  // CHECK EACH TYPES
  return ATOMICS.some((info) => check(info));
};

const ATOMICS: IAtomicInfo[] = [
  {
    name: "boolean",
    atomic: ts.TypeFlags.BooleanLike,
    literal: ts.TypeFlags.BooleanLiteral,
  },
  {
    name: "number",
    atomic: ts.TypeFlags.NumberLike,
    literal: ts.TypeFlags.NumberLiteral,
  },
  {
    name: "bigint",
    atomic: ts.TypeFlags.BigInt,
    literal: ts.TypeFlags.BigIntLiteral,
  },
  {
    name: "string",
    atomic: ts.TypeFlags.StringLike,
    literal: ts.TypeFlags.StringLiteral,
  },
];

interface IAtomicInfo {
  name: "boolean" | "number" | "bigint" | "string";
  atomic: ts.TypeFlags;
  literal: ts.TypeFlags;
}
