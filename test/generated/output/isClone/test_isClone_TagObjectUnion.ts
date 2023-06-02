import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagObjectUnion } from "../../../structures/TagObjectUnion";

export const test_isClone_TagObjectUnion = _test_isClone(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagObjectUnion.Type>> | null => {
            const is: any = (
                input: any,
            ): input is Array<TagObjectUnion.Type> => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    3 <= input.value;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ("string" === typeof input.value) return $io1(input);
                        if (
                            "number" === typeof input.value &&
                            Number.isFinite(input.value)
                        )
                            return $io0(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            const clone: any = (
                input: Array<TagObjectUnion.Type>,
            ): typia.Primitive<Array<TagObjectUnion.Type>> => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.value && 3 <= input.value;
                const $io1: any = (input: any): boolean =>
                    "string" === typeof input.value &&
                    3 <= input.value.length &&
                    7 >= input.value.length;
                const $throws: any = (typia.isClone as any).throws;
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
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    TagObjectUnion.SPOILERS,
);
