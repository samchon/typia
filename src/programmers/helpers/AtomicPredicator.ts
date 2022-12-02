import { Metadata } from "../../metadata/Metadata";

import { Atomic } from "../../typings/Atomic";

import { ArrayUtil } from "../../utils/ArrayUtil";

export namespace AtomicPredicator {
    export const constant =
        (meta: Metadata) =>
        (name: Atomic.Literal): boolean =>
            !ArrayUtil.has(meta.atomics, (atomic) => atomic === name);

    export const template = (meta: Metadata): boolean =>
        !ArrayUtil.has(meta.atomics, (type) => type === "string");
}
