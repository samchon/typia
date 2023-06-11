import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createClone_TagAtomicUnion = _test_clone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input: TagAtomicUnion): typia.Primitive<TagAtomicUnion> => {
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co0(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            value: input.value as any,
        });
        return Array.isArray(input) ? $cp0(input) : (input as any);
    },
);
