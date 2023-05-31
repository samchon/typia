import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataArray } from "../../../metadata/MetadataArray";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_array =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.Type, nullable: boolean): MetadataArray => {
        // CHECK EXISTENCE
        const [array, newbie, closure] = collection.emplaceArray(checker, type);
        ArrayUtil.add(array.nullables, nullable);
        if (newbie === false) return array;

        // CONSTRUCT VALUE TYPE
        const value: Metadata = explore_metadata(checker)(options)(collection)(
            type.getNumberIndexType()!,
            false,
            false,
        );
        closure(value);

        // RETURNS WITH RECURSIVE PREDICATION
        Writable(array).recursive = isRecursive(new Set())(array)(value);
        return array;
    };

const isRecursive =
    (visited: Set<Metadata>) =>
    (array: MetadataArray) =>
    (meta: Metadata): boolean => {
        if (visited.has(meta)) return false;
        visited.add(meta);

        return (
            meta.arrays.some(
                (a) => a === array || isRecursive(visited)(array)(a.value),
            ) ||
            meta.objects.some((o) =>
                o.properties.some((p) => isRecursive(visited)(array)(p.value)),
            ) ||
            meta.definitions.some((d) =>
                isRecursive(visited)(array)(d.value),
            ) ||
            meta.tuples.some((t) =>
                t.elements.some((e) => isRecursive(visited)(array)(e)),
            ) ||
            meta.maps.some((m) => isRecursive(visited)(array)(m.value)) ||
            meta.sets.some((s) => isRecursive(visited)(array)(s)) ||
            (meta.resolved !== null &&
                isRecursive(visited)(array)(meta.resolved)) ||
            (meta.rest !== null && isRecursive(visited)(array)(meta.rest))
        );
    };
