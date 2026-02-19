import { ArrayUtil } from "@typia/utils";
import ts from "typescript";

import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";
import { MetadataSchema } from "../../../schemas/metadata/MetadataSchema";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

interface IProps extends IMetadataIteratorProps {
  array: ts.Type;
}

export const emplace_metadata_array_type = (
  props: IProps,
): MetadataArrayType => {
  // CHECK EXISTENCE
  const [array, newbie, setValue] = props.components.emplaceArray(
    props.checker,
    props.type,
  );
  ArrayUtil.add(array.nullables, props.metadata.nullable);
  if (newbie === false) return array;

  // CONSTRUCT VALUE TYPE
  const value: MetadataSchema = explore_metadata({
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
