import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_createAssertStringify_ToJsonArray = _test_assertStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input: any): string => {
        const assert = (input: any): ToJsonArray => {
            const $guard = (typia.createAssertStringify as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ToJsonArray => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    true ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    true ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    });
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    true ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    });
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    true ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    });
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
                            value: input,
                        })) &&
                    (input.length === 4 ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "[Resolve<ToJsonArray.IArray<boolean>>, Resolve<ToJsonArray.IArray<number>>, Resolve<ToJsonArray.IArray<string>>, Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>]",
                            value: input,
                        })) &&
                    (("object" === typeof input[0] && null !== input[0]) ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "Resolve<ToJsonArray.IArray<boolean>>",
                            value: input[0],
                        })) &&
                    $ao0(input[0], _path + "[0]", true) &&
                    (("object" === typeof input[1] && null !== input[1]) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "Resolve<ToJsonArray.IArray<number>>",
                            value: input[1],
                        })) &&
                    $ao1(input[1], _path + "[1]", true) &&
                    (("object" === typeof input[2] && null !== input[2]) ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "Resolve<ToJsonArray.IArray<string>>",
                            value: input[2],
                        })) &&
                    $ao2(input[2], _path + "[2]", true) &&
                    (("object" === typeof input[3] && null !== input[3]) ||
                        $guard(true, {
                            path: _path + "[3]",
                            expected:
                                "Resolve<ToJsonArray.IArray<ToJsonArray.IObject>>",
                            value: input[3],
                        })) &&
                    $ao3(input[3], _path + "[3]", true)
                );
            })(input, "$input", true);
            return input;
        };
        const stringify = (input: ToJsonArray): string => {
            const $number = (typia.createAssertStringify as any).number;
            const $string = (typia.createAssertStringify as any).string;
            return `[${`[${input[0]
                .toJSON()
                .map((elem: any) => elem)
                .join(",")}]`},${`[${input[1]
                .toJSON()
                .map((elem: any) => $number(elem))
                .join(",")}]`},${`[${input[2]
                .toJSON()
                .map((elem: any) => $string(elem))
                .join(",")}]`},${`[${input[3]
                .toJSON()
                .map((elem: any) => `{"id":${$string(elem.id)}}`)
                .join(",")}]`}]`;
        };
        return stringify(assert(input));
    },
);
