import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataArray } from "../../../metadata/MetadataArray";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_array } from "./emplace_metadata_array";

export const iterate_metadata_array =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type): boolean => {
        if (!checker.isArrayType(type) && !checker.isArrayLikeType(type))
            return false;

        const array: MetadataArray = emplace_metadata_array(checker)(options)(
            collection,
        )(type, meta.nullable);
        ArrayUtil.add(meta.arrays, array, (elem) => elem.name === array.name);
        return true;
    };
