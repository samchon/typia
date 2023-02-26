import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_createClone_TagObjectUnion = _test_clone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (
        input: Array<TagObjectUnion.Type>,
    ): typia.Primitive<Array<TagObjectUnion.Type>> => {
        const $throws = (typia.createClone as any).throws;
        const $io0 = (input: any): boolean =>
            "number" === typeof input.value && 3 <= input.value;
        const $io1 = (input: any): boolean =>
            "string" === typeof input.value &&
            3 <= input.value.length &&
            7 >= input.value.length;
        const $iu0 = (input: any): any =>
            (() => {
                if ("number" === typeof input.value) return $io0(input);
                if ("string" === typeof input.value) return $io1(input);
                return false;
            })();
        const $co0 = (input: any): any => ({
            value: input.value as any,
        });
        const $co1 = (input: any): any => ({
            value: input.value as any,
        });
        const $cu0 = (input: any): any =>
            (() => {
                if ("number" === typeof input.value) return $co0(input);
                if ("string" === typeof input.value) return $co1(input);
                $throws({
                    expected:
                        "(TagObjectUnion.Numeric | TagObjectUnion.Literal)",
                    value: input,
                });
            })();
        return Array.isArray(input)
            ? input.map((elem: any) =>
                  "object" === typeof elem && null !== elem
                      ? $cu0(elem)
                      : (elem as any),
              )
            : (input as any);
    },
);
