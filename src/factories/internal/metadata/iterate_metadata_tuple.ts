import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataTuple } from "../../../schemas/metadata/MetadataTuple";
import { MetadataTupleType } from "../../../schemas/metadata/MetadataTupleType";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_tuple } from "./emplace_metadata_tuple";

export const iterate_metadata_tuple =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (
        meta: Metadata,
        type: ts.TupleType,
        explore: MetadataFactory.IExplore,
    ): boolean => {
        if (!checker.isTupleType(type)) return false;

        const tupleType: MetadataTupleType = emplace_metadata_tuple(checker)(
            options,
        )(collection)(errors)(type, meta.nullable, explore);
        ArrayUtil.add(
            meta.tuples,
            MetadataTuple.create({
                type: tupleType,
                tags: [],
            }),
            (elem) => elem.type.name === tupleType.name,
        );
        return true;
    };
