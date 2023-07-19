import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_misc_assertClone_ToJsonAtomicSimple =
    _test_misc_assertClone<ToJsonAtomicSimple>(ToJsonAtomicSimple)(
        (input: any): typia.Primitive<ToJsonAtomicSimple> => {
            const assert = (input: any): ToJsonAtomicSimple => {
                const __is = (input: any): input is ToJsonAtomicSimple => {
                    const $io0 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $io1 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $io2 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    return (
                        Array.isArray(input) &&
                        input.length === 3 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io1(input[1]) &&
                        "object" === typeof input[2] &&
                        null !== input[2] &&
                        $io2(input[2])
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonAtomicSimple => {
                        const $guard = (typia.misc.createAssertClone as any)
                            .guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "function" === typeof input.toJSON ||
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
                            "function" === typeof input.toJSON ||
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
                            "function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        return (
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ToJsonAtomicSimple",
                                    value: input,
                                })) &&
                                (input.length === 3 ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "[ToJsonAtomicSimple.IToJson<boolean>, ToJsonAtomicSimple.IToJson<number>, ToJsonAtomicSimple.IToJson<string>]",
                                        value: input,
                                    })) &&
                                (((("object" === typeof input[0] &&
                                    null !== input[0]) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "ToJsonAtomicSimple.IToJson<boolean>",
                                        value: input[0],
                                    })) &&
                                    $ao0(input[0], _path + "[0]", true)) ||
                                    $guard(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "ToJsonAtomicSimple.IToJson<boolean>",
                                        value: input[0],
                                    })) &&
                                (((("object" === typeof input[1] &&
                                    null !== input[1]) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "ToJsonAtomicSimple.IToJson<number>",
                                        value: input[1],
                                    })) &&
                                    $ao1(input[1], _path + "[1]", true)) ||
                                    $guard(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "ToJsonAtomicSimple.IToJson<number>",
                                        value: input[1],
                                    })) &&
                                (((("object" === typeof input[2] &&
                                    null !== input[2]) ||
                                    $guard(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "ToJsonAtomicSimple.IToJson<string>",
                                        value: input[2],
                                    })) &&
                                    $ao2(input[2], _path + "[2]", true)) ||
                                    $guard(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "ToJsonAtomicSimple.IToJson<string>",
                                        value: input[2],
                                    }))) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ToJsonAtomicSimple",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: ToJsonAtomicSimple,
            ): typia.Primitive<ToJsonAtomicSimple> => {
                return Array.isArray(input) &&
                    input.length === 3 &&
                    true &&
                    true &&
                    true
                    ? ([
                          "object" === typeof input[0] &&
                          null !== input[0] &&
                          "function" === typeof input[0].toJSON
                              ? (input[0].toJSON() as any)
                              : (input[0] as any),
                          "object" === typeof input[1] &&
                          null !== input[1] &&
                          "function" === typeof input[1].toJSON
                              ? (input[1].toJSON() as any)
                              : (input[1] as any),
                          "object" === typeof input[2] &&
                          null !== input[2] &&
                          "function" === typeof input[2].toJSON
                              ? (input[2].toJSON() as any)
                              : (input[2] as any),
                      ] as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        },
    );
