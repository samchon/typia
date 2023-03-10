import { Metadata } from "../../metadata/Metadata";

import { Atomic } from "../../typings/Atomic";

import { ArrayUtil } from "../../utils/ArrayUtil";

export namespace AtomicPredicator {
    export const constant =
        (meta: Metadata) =>
        (name: Atomic.Literal): boolean =>
            !ArrayUtil.has(meta.atomics, (atomic) => atomic === name) &&
            !ArrayUtil.has(
                meta.natives,
                (native) => native.toLowerCase() === name,
            );

    export const atomic =
        (meta: Metadata) =>
        (name: Atomic.Literal): boolean =>
            !ArrayUtil.has(
                meta.natives,
                (native) => native.toLowerCase() === name,
            );

    export const native = (name: string) => LIKE.has(name.toLowerCase());

    export const template = (meta: Metadata): boolean =>
        !ArrayUtil.has(meta.atomics, (type) => type === "string");
}

const LIKE = new Set(["boolean", "number", "string"]);
