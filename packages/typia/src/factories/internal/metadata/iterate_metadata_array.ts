import ts from "typescript";

import { MetadataArray } from "../../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { emplace_metadata_array_type } from "./emplace_metadata_array_type";

export const iterate_metadata_array = (
  props: IMetadataIteratorProps,
): boolean => {
  const array: ts.Type | null =
    props.checker.isArrayType(props.type) === false
      ? find_array_extended({
          checker: props.checker,
          memory: new Map(),
          type: props.type,
        })
      : props.type;
  if (array === null) return false;

  const arrayType: MetadataArrayType = emplace_metadata_array_type({
    ...props,
    array,
  });
  ArrayUtil.add(
    props.metadata.arrays,
    MetadataArray.create({
      type: arrayType,
      tags: [],
    }),
    (elem) => elem.type.name === arrayType.name,
  );
  return true;
};

const find_array_extended = (props: {
  checker: ts.TypeChecker;
  memory: Map<ts.Type, ts.Type | null>;
  type: ts.Type;
}): ts.Type | null => {
  const cached = props.memory.get(props.type);
  if (cached !== undefined) return null;

  props.memory.set(props.type, null);
  const res: ts.Type | null = (() => {
    if (props.type.isClassOrInterface() === false) return null;
    for (const t of props.type.resolvedBaseTypes ?? [])
      if (props.checker.isArrayType(t)) return t;
      else {
        const res: ts.Type | null = find_array_extended({
          ...props,
          type: t,
        });
        if (res !== null) return res;
      }
    return null;
  })();
  props.memory.set(props.type, res);
  return res;
};
