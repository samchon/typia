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
    (errors: MetadataFactory.IError[]) =>
    (type: ts.Type | null, explore: MetadataFactory.IExplore): Metadata => {
        // CONSTRUCT METADATA
        const meta: Metadata = Metadata.initialize(explore.escaped);
        if (type === null) return meta;

        // ITERATE TYPESCRIPT TYPES
        iterate_metadata(checker)(options)(collection)(errors)(
            meta,
            type,
            explore,
        );
        emend_metadata_atomics(meta);
        if (meta.escaped) {
            emend_metadata_atomics(meta.escaped.original);
            emend_metadata_atomics(meta.escaped.returns);
        }
        return meta;
    };
