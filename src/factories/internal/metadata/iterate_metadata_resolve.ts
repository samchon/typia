import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataEscaped } from "../../../schemas/metadata/MetadataEscaped";

import { Writable } from "../../../typings/Writable";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { iterate_metadata } from "./iterate_metadata";

// import { iterate_metadata_coalesce } from "./iterate_metadata_coalesce";

export const iterate_metadata_resolve =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (
        meta: Metadata,
        type: ts.Type,
        resolved: boolean,
        aliased: boolean,
    ): boolean => {
        if (options.escape === false || resolved === true) return false;

        const escaped: ts.Type | null = TypeFactory.resolve(checker)(type);
        if (escaped === null) return false;

        if (meta.escaped === null) {
            Writable(meta).escaped = MetadataEscaped.create({
                original: Metadata.initialize(),
                returns: Metadata.initialize(),
            });
        }
        iterate_metadata(checker)(options)(collection)(
            meta.escaped!.original,
            type,
            true,
            aliased,
        );
        iterate_metadata(checker)(options)(collection)(
            meta.escaped!.returns,
            escaped,
            true,
            aliased,
        );
        return true;
    };
