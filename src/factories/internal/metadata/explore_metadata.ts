import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { iterate_metadata } from "./iterate_metadata";

export const explore_metadata =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.Type | null, parentResolved: boolean): Metadata => {
        // CONSTRUCT METADATA
        const meta: Metadata = Metadata.initialize(parentResolved);
        if (type !== null)
            iterate_metadata(checker)(options)(collection)(
                meta,
                type,
                parentResolved,
            );

        // SORT OBJECTS
        if (meta.objects.length > 1) {
            meta.objects.sort((x, y) =>
                MetadataObject.covers(x, y)
                    ? -1
                    : MetadataObject.covers(y, x)
                    ? 1
                    : 0,
            );
            if (parentResolved === false)
                meta.union_index = collection.getUnionIndex(meta);
        }

        // SORT ARRAYS AND TUPLES
        if (meta.arrays.length > 1)
            meta.arrays.sort((x, y) =>
                Metadata.covers(x, y) ? -1 : Metadata.covers(y, x) ? 1 : 0,
            );
        if (meta.tuples.length > 1)
            meta.tuples.sort((x, y) => {
                const xt = Metadata.initialize();
                const yt = Metadata.initialize();

                xt.tuples.push(x);
                yt.tuples.push(y);

                return Metadata.covers(xt, yt)
                    ? -1
                    : Metadata.covers(yt, xt)
                    ? 1
                    : 0;
            });

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

        // RETURNS WITH VALIDATION
        if (options.validate) options.validate(meta);
        return meta;
    };
