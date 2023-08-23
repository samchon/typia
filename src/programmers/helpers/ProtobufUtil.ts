import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { Atomic } from "../../typings/Atomic";

export namespace ProtobufUtil {
    export const getAtomics = (meta: Metadata) => {
        const set: Set<Atomic.Literal> = new Set();

        for (const a of meta.atomics) set.add(a.type);
        for (const constant of meta.constants) set.add(constant.type);
        if (meta.templates.length) set.add("string");

        return [...set].sort(
            (x, y) => ATOMIC_ORDER.get(x)! - ATOMIC_ORDER.get(y)!,
        );
    };

    export const isStaticObject = (obj: MetadataObject): boolean =>
        obj.properties.length >= 1 &&
        obj.properties.every((p) => p.key.isSoleLiteral());
}

const ATOMIC_ORDER = new Map<Atomic.Literal, number>([
    ["boolean", 0],
    ["bigint", 1],
    ["number", 2],
    ["string", 3],
]);
