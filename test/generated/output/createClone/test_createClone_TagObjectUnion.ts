import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_createClone_TagObjectUnion = _test_clone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input: TagObjectUnion): typia.Primitive<TagObjectUnion> => {
        const $io0: any = (input: any): boolean =>
            "number" === typeof input.value && 3 <= input.value;
        const $io1: any = (input: any): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            7 >= input.value.length;
        const $throws: any = (typia.createClone as any).throws;
        const $co0: any = (input: any): any => ({
            value: input.value as any,
        });
        const $co1: any = (input: any): any => ({
            value: input.value as any,
        });
        return Array.isArray(input)
            ? (() =>
                  input.map((elem: any) =>
                      "object" === typeof elem && null !== elem
                          ? $cu0(elem)
                          : (elem as any),
                  ))()
            : (input as any);
    },
);
