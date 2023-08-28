import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_union =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (
        meta: Metadata,
        type: ts.Type,
        explore: MetadataFactory.IExplore,
    ): boolean => {
        if (!type.isUnion()) return false;
        type.types.forEach((t) =>
            iterate_metadata(checker)(options)(collection)(errors)(meta, t, {
                ...explore,
                aliased: false,
            }),
        );
        return true;
    };
