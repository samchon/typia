import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataArray } from "../../../schemas/metadata/MetadataArray";
import { MetadataArrayType } from "../../../schemas/metadata/MetadataArrayType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_array_type } from "./emplace_metadata_array_type";

export const iterate_metadata_array =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type): boolean => {
        if (!checker.isArrayType(type)) return false;

        const arrayType: MetadataArrayType = emplace_metadata_array_type(
            checker,
        )(options)(collection)(type, meta.nullable);
        ArrayUtil.add(
            meta.arrays,
            MetadataArray.create({
                type: arrayType,
                tags: [],
            }),
            (elem) => elem.type.name === arrayType.name,
        );
        return true;
    };
