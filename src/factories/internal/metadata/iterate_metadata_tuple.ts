import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../../schemas/metadata/MetadataTuple";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_tuple } from "./emplace_metadata_tuple";

export const iterate_metadata_tuple =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.TupleType): boolean => {
        if (!checker.isTupleType(type)) return false;

        const tuple: MetadataTuple = emplace_metadata_tuple(checker)(options)(
            collection,
        )(type, meta.nullable);
        ArrayUtil.add(meta.tuples, tuple, (elem) => elem.name === tuple.name);
        return true;
    };
