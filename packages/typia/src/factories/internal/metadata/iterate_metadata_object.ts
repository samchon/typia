import ts from "typescript";

import { MetadataObject } from "../../../schemas/metadata/MetadataObject";
import { MetadataObjectType } from "../../../schemas/metadata/MetadataObjectType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { emplace_metadata_object } from "./emplace_metadata_object";

export const iterate_metadata_object = (
  props: IMetadataIteratorProps,
  ensure: boolean = false,
): boolean => {
  if (ensure === false) {
    const filter = (flag: ts.TypeFlags) => (props.type.getFlags() & flag) !== 0;
    if (
      !filter(ts.TypeFlags.Object) &&
      !props.type.isIntersection() &&
      (props.type as any).intrinsicName !== "object"
    )
      return false;
  }

  const obj: MetadataObjectType = emplace_metadata_object(props);
  ArrayUtil.add(
    props.metadata.objects,
    MetadataObject.create({
      type: obj,
      tags: [],
    }),
    (elem) => elem.type.name === obj.name,
  );
  return true;
};
