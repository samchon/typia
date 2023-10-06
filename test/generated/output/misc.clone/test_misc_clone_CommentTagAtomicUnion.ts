import typia from "../../../../src";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_misc_clone_CommentTagAtomicUnion = _test_misc_clone(
    "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)((input) =>
    ((input: CommentTagAtomicUnion): typia.Resolved<CommentTagAtomicUnion> => {
        const $io1 = (input: any): boolean =>
            ("string" === typeof input.value &&
                3 <= input.value.length &&
                input.value.length <= 7) ||
            ("number" === typeof input.value && 3 <= input.value);
        const $cp0 = (input: any) =>
            input.map((elem: any) =>
                "object" === typeof elem && null !== elem
                    ? $co1(elem)
                    : (elem as any),
            );
        const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
                ? $cp0(input.value)
                : (input.value as any),
        });
        const $co1 = (input: any): any => ({
            value: input.value as any,
        });
        return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
    })(input),
);
