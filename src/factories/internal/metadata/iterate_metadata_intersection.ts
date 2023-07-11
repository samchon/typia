import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_intersection =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (
        meta: Metadata,
        type: ts.Type,
        resolved: boolean,
        aliased: boolean,
    ): boolean => {
        if (!type.isIntersection()) return false;
        else if (
            type.types.every(
                (child) =>
                    (child.getFlags() & ts.TypeFlags.Object) !== 0 &&
                    !checker.isArrayType(child) &&
                    !checker.isTupleType(child),
            )
        )
            return false;

        // COSTRUCT FAKE METADATA LIST
        const fakeCollection: MetadataCollection = new MetadataCollection();
        const children: Metadata[] = [
            ...new Map(
                type.types.map((t) => {
                    const m: Metadata = explore_metadata(checker)({
                        ...options,
                        absorb: true,
                    })(fakeCollection)(t, resolved);
                    return [m.getName(), m] as const;
                }),
            ).values(),
        ];

        // ONLY ONE CHILD AFTER REMOVING DUPLICATES
        if (children.length === 1) {
            iterate_metadata(checker)(options)(collection)(
                meta,
                type.types[0]!,
                resolved,
                aliased,
            );
            return true;
        }

        // ABSORB TO ATOMIC (OR CONSTANT) TYPE
        const atomics: Metadata[] = children.filter(
            (c) =>
                (c.atomics.length ? 1 : 0 + c.constants.length ? 1 : 0) ===
                c.bucket(),
        );
        const objects: Metadata[] = children.filter(
            (c) => c.objects.length && c.objects.length === c.size(),
        );
        if (
            atomics.length === 0 ||
            atomics.length + objects.length !== children.length
        )
            throw new Error(message(children));

        const least: Metadata = atomics.reduce((x, y) => {
            if (Metadata.covers(x, y)) return y;
            else if (Metadata.covers(y, x)) return x;
            throw new Error(message(children));
        });
        Object.assign(meta, Metadata.merge(meta, least));
        return true;
    };

const message = (children: Metadata[]) =>
    `Error on typia.MetadataFactory.analyze(): nonsensible intersection type detected - ${children
        .map((c) => c.getName())
        .join(" & ")}.`;
