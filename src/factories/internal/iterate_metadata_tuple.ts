import ts from "typescript";

import { Metadata } from "../../metadata/Metadata";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { MetadataCollection } from "../MetadataCollection";
import { MetadataFactory } from "../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const iterate_metadata_tuple =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type): boolean => {
        if (!(checker as any).isTupleType(type)) return false;

        const children: Metadata[] = checker
            .getTypeArguments(type as ts.TypeReference)
            .map((elem) =>
                explore_metadata(checker)(options)(collection)(elem, false),
            );
        ArrayUtil.set(meta.tuples, children, join_tuple_names);
        return true;
    };

function join_tuple_names(metas: Metadata[]): string {
    return `[${metas.map((m) => m.getName).join(", ")}]`;
}
