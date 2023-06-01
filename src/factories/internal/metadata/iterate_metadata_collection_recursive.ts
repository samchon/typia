import { Metadata } from "../../../metadata/Metadata";
import { MetadataArray } from "../../../metadata/MetadataArray";
import { MetadataObject } from "../../../metadata/MetadataObject";
import { MetadataTuple } from "../../../metadata/MetadataTuple";

import { MetadataCollection } from "../../MetadataCollection";

export const iterate_metadata_collection_recursive = (
    collection: MetadataCollection,
): void => {
    for (const array of collection.arrays())
        if (array.recursive === null)
            collection.setArrayRecursive(
                array,
                isArrayRecursive(new Set())(array)(array.value),
            );
    for (const tuple of collection.tuples())
        if (tuple.recursive === null) {
            const visited: Set<Metadata> = new Set();
            collection.setTupleRecursive(
                tuple,
                tuple.elements.some(isTupleRecursive(visited)(tuple)),
            );
        }
    for (const object of collection.objects())
        if (object.recursive === null) {
            const visited: Set<Metadata> = new Set();
            collection.setObjectRecursive(
                object,
                object.properties.some((p) =>
                    isObjectRecursive(visited)(object)(p.value),
                ),
            );
        }
};

const isArrayRecursive =
    (visited: Set<Metadata>) =>
    (array: MetadataArray) =>
    (meta: Metadata): boolean => {
        if (visited.has(meta)) return false;
        visited.add(meta);

        return (
            meta.arrays.some(
                (a) => a === array || isArrayRecursive(visited)(array)(a.value),
            ) ||
            meta.definitions.some((d) =>
                isArrayRecursive(visited)(array)(d.value),
            ) ||
            meta.tuples.some(
                (t) =>
                    !t.recursive &&
                    t.elements.some((e) => isArrayRecursive(visited)(array)(e)),
            ) ||
            meta.maps.some((m) => isArrayRecursive(visited)(array)(m.value)) ||
            meta.sets.some((s) => isArrayRecursive(visited)(array)(s)) ||
            (meta.resolved !== null &&
                isArrayRecursive(visited)(array)(meta.resolved)) ||
            (meta.rest !== null && isArrayRecursive(visited)(array)(meta.rest))
        );
    };

const isTupleRecursive =
    (visited: Set<Metadata>) =>
    (tuple: MetadataTuple) =>
    (meta: Metadata): boolean => {
        if (visited.has(meta)) return false;
        visited.add(meta);

        return (
            meta.tuples.some(
                (t) =>
                    t === tuple ||
                    t.elements.some((e) => isTupleRecursive(visited)(tuple)(e)),
            ) ||
            meta.arrays.some(
                (a) =>
                    !a.recursive && isTupleRecursive(visited)(tuple)(a.value),
            ) ||
            meta.maps.some((m) => isTupleRecursive(visited)(tuple)(m.value)) ||
            meta.sets.some((s) => isTupleRecursive(visited)(tuple)(s)) ||
            meta.definitions.some((d) =>
                isTupleRecursive(visited)(tuple)(d.value),
            ) ||
            (meta.resolved !== null &&
                isTupleRecursive(visited)(tuple)(meta.resolved)) ||
            (meta.rest !== null && isTupleRecursive(visited)(tuple)(meta.rest))
        );
    };

const isObjectRecursive =
    (visited: Set<Metadata>) =>
    (obj: MetadataObject) =>
    (meta: Metadata): boolean => {
        if (visited.has(meta)) return false;

        visited.add(meta);
        return (
            meta.objects.some(
                (o) =>
                    obj === o ||
                    o.properties.some((prop) =>
                        isObjectRecursive(visited)(obj)(prop.value),
                    ),
            ) ||
            meta.definitions.some((def) =>
                isObjectRecursive(visited)(obj)(def.value),
            ) ||
            meta.arrays.some(
                (array) =>
                    !array.recursive &&
                    isObjectRecursive(visited)(obj)(array.value),
            ) ||
            meta.tuples.some(
                (tuple) =>
                    !tuple.recursive &&
                    tuple.elements.some((elem) =>
                        isObjectRecursive(visited)(obj)(elem),
                    ),
            ) ||
            meta.maps.some((map) =>
                isObjectRecursive(visited)(obj)(map.value),
            ) ||
            meta.sets.some((value) => isObjectRecursive(visited)(obj)(value)) ||
            (meta.resolved !== null &&
                isObjectRecursive(visited)(obj)(meta.resolved)) ||
            (meta.rest !== null && isObjectRecursive(visited)(obj)(meta.rest))
        );
    };
