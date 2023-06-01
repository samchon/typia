import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
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
        const out = (meta: Metadata) => {
            if (options.validate) options.validate(meta);
            return meta;
        };
        if (type === null) return out(meta);

        // ITERATE TYPESCRIPT TYPES
        iterate_metadata(checker)(options)(collection)(
            meta,
            type,
            parentResolved,
            aliased,
        );

        // EMEND ATOMICS
        for (const type of meta.atomics) {
            const index: number = meta.constants.findIndex(
                (c) => c.type === type,
            );
            if (index !== -1) meta.constants.splice(index, 1);
        }

        // EMEND BOOLEAN
        {
            const index: number = meta.constants.findIndex(
                (c) => c.type === "boolean",
            );
            if (index !== -1 && meta.constants[index]!.values.length === 2) {
                meta.constants.splice(index, 1);
                ArrayUtil.take(
                    meta.atomics,
                    (type) => type === "boolean",
                    () => "boolean",
                );
            }
        }

        // EMEND TEMPLATE
        if (
            meta.templates.length &&
            meta.atomics.find((type) => type === "string") !== undefined
        )
            meta.templates.splice(0, meta.templates.length);
        return out(meta);
    };
