import typia from "../../../../src";
import { TagLength } from "../../../structures/TagLength";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TagLength = _test_assertStringify(
    "TagLength",
    TagLength.generate,
    (input: any): string => {
        const assert = (input: any): TagLength => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagLength => {
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
        const stringify = (input: TagLength): string => {
            const $string = (typia.createAssertStringify as any).string;
            const $so0 = (input: any): any =>
                `{"fixed":${$string(input.fixed)},"minimum":${$string(
                    input.minimum,
                )},"maximum":${$string(
                    input.maximum,
                )},"minimum_and_maximum":${$string(
                    input.minimum_and_maximum,
                )}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return stringify(assert(input));
    },
    TagLength.SPOILERS,
);
