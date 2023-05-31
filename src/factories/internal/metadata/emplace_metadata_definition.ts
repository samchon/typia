import ts from "typescript";

import { Metadata } from "../../../metadata/Metadata";
import { MetadataDefinition } from "../../../metadata/MetadataDefinition";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_definition =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (type: ts.Type, nullable: boolean): MetadataDefinition => {
        // CHECK EXISTENCE
        const [def, newbie, closure] = collection.emplaceDefinition(
            checker,
            type,
            type.aliasSymbol!,
        );
        ArrayUtil.add(def.nullables, nullable);
        if (newbie === false) return def;

        // CONSTRUCT VALUE TYPE
        const value: Metadata = explore_metadata(checker)(options)(collection)(
            type,
            false,
            true,
        );
        closure(value);

        // RETURNS WITH RECURSIVE PREDICATION
        Writable(def).recursive = isRecursive(new Set())(def)(value);
        return def;
    };

const isRecursive =
    (visited: Set<Metadata>) =>
    (definition: MetadataDefinition) =>
    (meta: Metadata): boolean => {
        if (visited.has(meta)) return false;
        visited.add(meta);

        return (
            meta.definitions.some(
                (d) =>
                    d === definition ||
                    isRecursive(visited)(definition)(d.value),
            ) ||
            meta.arrays.some((a) =>
                isRecursive(visited)(definition)(a.value),
            ) ||
            meta.objects.some((o) =>
                o.properties.some((p) =>
                    isRecursive(visited)(definition)(p.value),
                ),
            ) ||
            meta.tuples.some((t) =>
                t.elements.some((e) => isRecursive(visited)(definition)(e)),
            ) ||
            meta.maps.some((m) => isRecursive(visited)(definition)(m.value)) ||
            meta.sets.some((s) => isRecursive(visited)(definition)(s)) ||
            (meta.resolved !== null &&
                isRecursive(visited)(definition)(meta.resolved)) ||
            (meta.rest !== null && isRecursive(visited)(definition)(meta.rest))
        );
    };
