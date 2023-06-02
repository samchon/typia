import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { TagLength } from "../../../structures/TagLength";

export const test_isClone_TagLength = _test_isClone(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagLength.Type>> | null => {
            const is: any = (input: any): input is Array<TagLength.Type> => {
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.fixed &&
                    5 === input.fixed.length &&
                    "string" === typeof input.minimum &&
                    3 <= input.minimum.length &&
                    "string" === typeof input.maximum &&
                    7 >= input.maximum.length &&
                    "string" === typeof input.minimum_and_maximum &&
                    3 <= input.minimum_and_maximum.length &&
                    7 >= input.minimum_and_maximum.length;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const clone: any = (
                input: Array<TagLength.Type>,
            ): typia.Primitive<Array<TagLength.Type>> => {
                const $co0: any = (input: any): any => ({
                    fixed: input.fixed as any,
                    minimum: input.minimum as any,
                    maximum: input.maximum as any,
                    minimum_and_maximum: input.minimum_and_maximum as any,
                });
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $co0(elem)
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            if (!is(input)) return null;
            const output: any = clone(input);
            return output;
        })(input),
    TagLength.SPOILERS,
);
