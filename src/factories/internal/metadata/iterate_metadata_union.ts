import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_union =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type, parentResolved: boolean): boolean => {
        if (!type.isUnion()) return false;
        type.types.forEach((t) =>
            iterate_metadata(checker)(options)(collection)(
                meta,
                t,
                parentResolved,
                false,
            ),
        );
        return true;
    };
