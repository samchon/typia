import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataTuple } from "../../../metadata/MetadataTuple";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_tuple =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.TupleType, nullable: boolean): MetadataTuple => {
        // CHECK EXISTENCE
        const [tuple, newbie, closure] = collection.emplaceTuple(checker, type);
        ArrayUtil.add(tuple.nullables, nullable);
        if (newbie === false) return tuple;

        // CONSTRUCT ELEMENT TYPES
        const flagList: readonly ts.ElementFlags[] =
            type.elementFlags ??
            (type.target as ts.TupleType)?.elementFlags ??
            [];
        const elements: Metadata[] = checker
            .getTypeArguments(type as ts.TypeReference)
            .map((elem, i) => {
                const child: Metadata = explore_metadata(checker)(options)(
                    collection,
                )(elem, false, false);

                // CHECK OPTIONAL
                const flag: ts.ElementFlags | undefined = flagList[i];
                if (flag === ts.ElementFlags.Optional)
                    Writable(child).optional = true;

                // REST TYPE
                if (flag !== ts.ElementFlags.Rest) return child;
                const wrapper: Metadata = Metadata.initialize();
                Writable(wrapper).rest = child;
                return wrapper;
            });
        closure(elements);

        // RETURNS WITH RECURSIVE PREDICATION
        const visited: Set<Metadata> = new Set();
        Writable(tuple).recursive = tuple.elements.some(
            isRecursive(visited)(tuple),
        );
        return tuple;
    };

const isRecursive =
    (visited: Set<Metadata>) =>
    (tuple: MetadataTuple) =>
    (meta: Metadata): boolean => {
        if (visited.has(meta)) return false;
        visited.add(meta);

        return (
            meta.tuples.some(
                (t) =>
                    t === tuple ||
                    t.elements.some((e) => isRecursive(visited)(tuple)(e)),
            ) ||
            meta.arrays.some((a) => isRecursive(visited)(tuple)(a.value)) ||
            meta.maps.some((m) => isRecursive(visited)(tuple)(m.value)) ||
            meta.sets.some((s) => isRecursive(visited)(tuple)(s)) ||
            meta.definitions.some((d) =>
                isRecursive(visited)(tuple)(d.value),
            ) ||
            meta.objects.some((o) =>
                o.properties.some((p) => isRecursive(visited)(tuple)(p.value)),
            ) ||
            (meta.resolved !== null &&
                isRecursive(visited)(tuple)(meta.resolved)) ||
            (meta.rest !== null && isRecursive(visited)(tuple)(meta.rest))
        );
    };
