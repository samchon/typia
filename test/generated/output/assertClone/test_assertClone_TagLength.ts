import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagLength } from "../../../structures/TagLength";

export const test_assertClone_TagLength = _test_assertClone(
    "TagLength",
    TagLength.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagLength.Type>> => {
            const assert = (input: any): Array<TagLength.Type> => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<TagLength.Type> => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("string" === typeof input.fixed &&
                            5 === input.fixed.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string",
                                value: input.fixed,
                            })) &&
                        (("string" === typeof input.minimum &&
                            3 <= input.minimum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string",
                                value: input.minimum,
                            })) &&
                        (("string" === typeof input.maximum &&
                            7 >= input.maximum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string",
                                value: input.maximum,
                            })) &&
                        (("string" === typeof input.minimum_and_maximum &&
                            3 <= input.minimum_and_maximum.length &&
                            7 >= input.minimum_and_maximum.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string",
                                value: input.minimum_and_maximum,
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Array<Resolve<TagLength.Type>>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "Resolve<TagLength.Type>",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (
                input: Array<TagLength.Type>,
            ): typia.Primitive<Array<TagLength.Type>> => {
                const $co0 = (input: any): any => ({
                    fixed: input.fixed as any,
                    minimum: input.minimum as any,
                    maximum: input.maximum as any,
                    minimum_and_maximum: input.minimum_and_maximum as any,
                });
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    TagLength.SPOILERS,
);
