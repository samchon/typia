import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_clone_TagAtomicUnion = _test_clone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((
            input: Array<TagAtomicUnion.Type>,
        ): typia.Primitive<Array<TagAtomicUnion.Type>> => {
            const $co0: any = (input: any): any => ({
                value: input.value as any,
            });
            return Array.isArray(input)
                ? (() =>
                      input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      ))()
                : (input as any);
        })(input),
);
