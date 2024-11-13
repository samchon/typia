import ts from "typescript";

import { MetadataTuple } from "../../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { emplace_metadata_tuple } from "./emplace_metadata_tuple";

export const iterate_metadata_tuple = (
  props: IMetadataIteratorProps<ts.TupleType>,
): boolean => {
  if (!props.checker.isTupleType(props.type)) return false;

  const tupleType: MetadataTupleType = emplace_metadata_tuple(props);
  ArrayUtil.add(
    props.metadata.tuples,
    MetadataTuple.create({
      type: tupleType,
      tags: [],
    }),
    (elem) => elem.type.name === tupleType.name,
  );
  return true;
};
