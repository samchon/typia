import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";

import { Writable } from "../../../typings/Writable";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { TypeFactory } from "../../TypeFactory";
import { iterate_metadata } from "./iterate_metadata";

export const iterate_metadata_union =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (meta: Metadata, type: ts.Type, parentResolved: boolean): boolean => {
        if (!type.isUnion()) return false;
        else if (options.resolve === false || parentResolved === true) {
            type.types.forEach((t) =>
                iterate_metadata(checker)(options)(collection)(meta, t, false),
            );
            return true;
        }

        const filter = (flag: ts.TypeFlags, t: ts.Type) =>
            (t.getFlags() & flag) !== 0;
        const normals: ts.Type[] = [];
        const toJsons: ts.Type[] = [];

        for (const individual of type.types) {
            if (filter(ts.TypeFlags.Object, individual)) {
                const resolved: ts.Type | null = TypeFactory.resolve(
                    checker,
                    individual,
                );
                if (resolved !== null) toJsons.push(resolved);
                else normals.push(individual);
            } else normals.push(individual);
        }
        if (toJsons.length !== 0) {
            Writable(meta).resolved = (() => {
                const union: Metadata = Metadata.initialize();
                toJsons.forEach((t) =>
                    iterate_metadata(checker)(options)(collection)(
                        meta,
                        t,
                        true,
                    ),
                );
                if (union.objects.length > 1)
                    union.union_index = collection.getUnionIndex(union);
                return union;
            })();
        }
        normals.forEach((t) =>
            iterate_metadata(checker)(options)(collection)(meta, t, false),
        );
        return true;
    };
