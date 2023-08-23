import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emend_metadata_atomics } from "./emend_metadata_atomics";
import { iterate_metadata } from "./iterate_metadata";

export const explore_metadata =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (
        type: ts.Type | null,
        parentResolved: boolean,
        aliased: boolean = false,
    ): Metadata => {
        // CONSTRUCT METADATA
        const meta: Metadata = Metadata.initialize(parentResolved);
        collection.entire_.add(meta);

        if (type === null) return meta;

        // ITERATE TYPESCRIPT TYPES
        iterate_metadata(checker)(options)(collection)(
            meta,
            type,
            parentResolved,
            aliased,
        );
        emend_metadata_atomics(meta);
        if (meta.escaped) {
            emend_metadata_atomics(meta.escaped.original);
            emend_metadata_atomics(meta.escaped.returns);
        }
        return meta;
    };
