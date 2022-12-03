import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_array =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type): boolean => {
        if (
            !(checker as any).isArrayType(type) &&
            !(checker as any).isArrayLikeType(type)
        )
            return false;

        const value: ts.Type | null = type.getNumberIndexType() || null;
        ArrayUtil.set(
            meta.arrays,
            explore_metadata(checker)(options)(collection)(value, false),
            (elem) => elem.getName(),
        );
        return true;
    };
