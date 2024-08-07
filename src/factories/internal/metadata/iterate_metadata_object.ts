import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";

import { ArrayUtil } from "../../../utils/ArrayUtil";
import { TypePredicator } from "../../../utils/TypePredicator";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_object } from "./emplace_metadata_object";

export const iterate_metadata_object =
  (checker: ts.TypeChecker) =>
  (options: MetadataFactory.IOptions) =>
  (collection: MetadataCollection) =>
  (errors: MetadataFactory.IError[]) =>
  (meta: Metadata, type: ts.Type, ensure: boolean = false): boolean => {
    if (ensure === false) {
      const filter = (flag: ts.TypeFlags) => (type.flags & flag) !== 0;
      if (
        !filter(ts.TypeFlags.Object) &&
        !TypePredicator.isIntersection(type) &&
        (type as any).intrinsicName !== "object"
      )
        return false;
    }

    const obj: MetadataObject = emplace_metadata_object(checker)(options)(
      collection,
    )(errors)(type, meta.nullable);
    ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
    return true;
  };
