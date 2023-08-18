import { Metadata } from "../../schemas/metadata/Metadata";

import { Atomic } from "../../typings/Atomic";

export namespace ProtobufUtil {
    export const atomics = (meta: Metadata) => {
        const set: Set<Atomic.Literal> = new Set();

        for (const atomic of meta.atomics) set.add(atomic);
        for (const constant of meta.constants) set.add(constant.type);
        if (meta.templates.length) set.add("string");

        return [...set].sort(
            (x, y) => ATOMIC_ORDER.get(x)! - ATOMIC_ORDER.get(y)!,
        );
    };
}

const ATOMIC_ORDER = new Map<Atomic.Literal, number>([
    ["boolean", 0],
    ["bigint", 1],
    ["number", 2],
    ["string", 3],
]);
