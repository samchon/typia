import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_clone_TagObjectUnion = _test_clone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((
            input: Array<TagObjectUnion.Type>,
        ): typia.Primitive<Array<TagObjectUnion.Type>> => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.value && 3 <= input.value;
            const $io1 = (input: any): boolean =>
                "string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length;
            const $throws = (typia.clone as any).throws;
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $cu0(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                value: input.value as any,
            });
            const $co1 = (input: any): any => ({
                value: input.value as any,
            });
            const $cu0 = (input: any): any =>
                (() => {
                    if ("string" === typeof input.value) return $co1(input);
                    if ("number" === typeof input.value) return $co0(input);
                    $throws({
                        expected:
                            "(TagObjectUnion.Literal | TagObjectUnion.Numeric)",
                        value: input,
                    });
                })();
            return Array.isArray(input) ? $cp0(input) : (input as any);
        })(input),
);
