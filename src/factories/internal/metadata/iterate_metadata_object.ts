import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataObject } from "../../../metadata/MetadataObject";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { emplace_metadata_object } from "./emplace_metadata_object";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_object =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type, parentResolved: boolean): boolean => {
        const filter = (flag: ts.TypeFlags) => (type.getFlags() & flag) !== 0;
        if (
            !filter(ts.TypeFlags.Object) &&
            !type.isIntersection() &&
            (type as any).intrinsicName !== "object"
        )
            return false;
        else if (type.isIntersection()) {
            const fakeCollection = new MetadataCollection();
            const fakeSchema: Metadata = Metadata.initialize();

            type.types.forEach((t) =>
                iterate_metadata(checker)(options)(fakeCollection)(
                    fakeSchema,
                    t,
                    parentResolved,
                ),
            );
            if (
                fakeSchema.objects.length === 0 ||
                fakeSchema.objects.length !== fakeSchema.size()
            )
                return true;
        }

        const obj: MetadataObject = emplace_metadata_object(checker)(options)(
            collection,
        )(type, meta.nullable);
        ArrayUtil.add(meta.objects, obj, (elem) => elem.name === obj.name);
        return true;
    };
