import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_assertStringify_ToJsonArray = _test_assertStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): ToJsonArray => {
                const __is = (input: any): input is ToJsonArray => {
                    const $io0 = (input: any): boolean => true;
                    const $io1 = (input: any): boolean => true;
                    const $io2 = (input: any): boolean => true;
                    const $io3 = (input: any): boolean => true;
                    return (
                        Array.isArray(input) &&
                        input.length === 4 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io1(input[1]) &&
                        "object" === typeof input[2] &&
                        null !== input[2] &&
                        $io2(input[2]) &&
                        "object" === typeof input[3] &&
                        null !== input[3] &&
                        $io3(input[3])
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonArray => {
                        const $guard = (typia.assertStringify as any).guard;
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
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ToJsonArray",
                                    value: input,
                                })) &&
                                (input.length === 4 ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "[ToJsonArray.IArray<boolean>, ToJsonArray.IArray<number>, ToJsonArray.IArray<string>, ToJsonArray.IArray<ToJsonArray.IObject>]",
                                        value: input,
                                    })) &&
                                (((("object" === typeof input[0] &&
                                    null !== input[0]) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected: "ToJsonArray.IArray<boolean>",
                                        value: input[0],
                                    })) &&
                                    $ao0(input[0], _path + "[0]", true)) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected: "ToJsonArray.IArray<boolean>",
                                        value: input[0],
                                    })) &&
                                (((("object" === typeof input[1] &&
                                    null !== input[1]) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected: "ToJsonArray.IArray<number>",
                                        value: input[1],
                                    })) &&
                                    $ao1(input[1], _path + "[1]", true)) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected: "ToJsonArray.IArray<number>",
                                        value: input[1],
                                    })) &&
                                (((("object" === typeof input[2] &&
                                    null !== input[2]) ||
                                    $guard(true, {
                                        path: _path + "[2]",
                                        expected: "ToJsonArray.IArray<string>",
                                        value: input[2],
                                    })) &&
                                    $ao2(input[2], _path + "[2]", true)) ||
                                    $guard(true, {
                                        path: _path + "[2]",
                                        expected: "ToJsonArray.IArray<string>",
                                        value: input[2],
                                    })) &&
                                (((("object" === typeof input[3] &&
                                    null !== input[3]) ||
                                    $guard(true, {
                                        path: _path + "[3]",
                                        expected:
                                            "ToJsonArray.IArray<ToJsonArray.IObject>",
                                        value: input[3],
                                    })) &&
                                    $ao3(input[3], _path + "[3]", true)) ||
                                    $guard(true, {
                                        path: _path + "[3]",
                                        expected:
                                            "ToJsonArray.IArray<ToJsonArray.IObject>",
                                        value: input[3],
                                    }))) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ToJsonArray",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify = (input: ToJsonArray): string => {
                const $number = (typia.assertStringify as any).number;
                const $string = (typia.assertStringify as any).string;
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
                    .map((elem: any) => `{"id":${$string((elem as any).id)}}`)
                    .join(",")}]`}]`;
            };
            return stringify(assert(input));
        })(input),
);
