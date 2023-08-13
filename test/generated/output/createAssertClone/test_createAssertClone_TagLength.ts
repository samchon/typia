import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagLength } from "../../../structures/TagLength";

export const test_createAssertClone_TagLength = _test_assertClone(
    "TagLength",
    TagLength.generate,
    (input: any): typia.Primitive<TagLength> => {
        const assert = (input: any): TagLength => {
            const __is = (input: any): input is TagLength => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.fixed &&
                    5 === input.fixed.length &&
                    "string" === typeof input.minimum &&
                    3 <= input.minimum.length &&
                    "string" === typeof input.maximum &&
                    7 >= input.maximum.length &&
                    "string" === typeof input.minimum_and_maximum &&
                    3 <= input.minimum_and_maximum.length &&
                    7 >= input.minimum_and_maximum.length &&
                    "string" === typeof input.equal &&
                    10 <= input.equal.length &&
                    19 >= input.equal.length;
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
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagLength => {
                    const $guard = (typia.createAssertClone as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("string" === typeof input.fixed &&
                            (5 === input.fixed.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".fixed",
                                    expected: "string (@length 5)",
                                    value: input.fixed,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".fixed",
                                expected: "string",
                                value: input.fixed,
                            })) &&
                        (("string" === typeof input.minimum &&
                            (3 <= input.minimum.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum",
                                    expected: "string (@minLength 3)",
                                    value: input.minimum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum",
                                expected: "string",
                                value: input.minimum,
                            })) &&
                        (("string" === typeof input.maximum &&
                            (7 >= input.maximum.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".maximum",
                                    expected: "string (@maxLength 7)",
                                    value: input.maximum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".maximum",
                                expected: "string",
                                value: input.maximum,
                            })) &&
                        (("string" === typeof input.minimum_and_maximum &&
                            (3 <= input.minimum_and_maximum.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum_and_maximum",
                                    expected: "string (@minLength 3)",
                                    value: input.minimum_and_maximum,
                                })) &&
                            (7 >= input.minimum_and_maximum.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".minimum_and_maximum",
                                    expected: "string (@maxLength 7)",
                                    value: input.minimum_and_maximum,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".minimum_and_maximum",
                                expected: "string",
                                value: input.minimum_and_maximum,
                            })) &&
                        (("string" === typeof input.equal &&
                            (10 <= input.equal.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "string (@minLength 10)",
                                    value: input.equal,
                                })) &&
                            (19 >= input.equal.length ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal",
                                    expected: "string (@maxLength 19)",
                                    value: input.equal,
                                }))) ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "string",
                                value: input.equal,
                            }));
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "TagLength",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagLength.Type",
                                            value: elem,
                                        })) &&
                                        $ao0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected: "TagLength.Type",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagLength",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const clone = (input: TagLength): typia.Primitive<TagLength> => {
            const $cp0 = (input: any) =>
                input.map((elem: any) =>
                    "object" === typeof elem && null !== elem
                        ? $co0(elem)
                        : (elem as any),
                );
            const $co0 = (input: any): any => ({
                fixed: input.fixed as any,
                minimum: input.minimum as any,
                maximum: input.maximum as any,
                minimum_and_maximum: input.minimum_and_maximum as any,
                equal: input.equal as any,
            });
            return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    TagLength.SPOILERS,
);
