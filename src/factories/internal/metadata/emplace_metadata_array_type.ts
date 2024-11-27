import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

interface IProps extends IMetadataIteratorProps {
  array: ts.Type;
}

export const emplace_metadata_array_type = (
  props: IProps,
): MetadataArrayType => {
  // CHECK EXISTENCE
  const [array, newbie, setValue] = props.collection.emplaceArray(
    props.checker,
    props.type,
  );
  ArrayUtil.add(array.nullables, props.metadata.nullable);
  if (newbie === false) return array;

  // CONSTRUCT VALUE TYPE
  const value: Metadata = explore_metadata({
    ...props,
    type: props.array.getNumberIndexType()!,
    explore: {
      ...props.explore,
      escaped: false,
      aliased: false,
    },
    intersected: false,
  });
  setValue(value);
  return array;
};
