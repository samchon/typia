import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_assertEquals_ToJsonAtomicSimple = _test_assertEquals(
    "ToJsonAtomicSimple",
)<ToJsonAtomicSimple>(ToJsonAtomicSimple)((input: any): ToJsonAtomicSimple => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is ToJsonAtomicSimple => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["toJSON"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return (
            Array.isArray(input) &&
            input.length === 3 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0], true) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1], true) &&
            "object" === typeof input[2] &&
            null !== input[2] &&
            $io2(input[2], true)
        );
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonAtomicSimple => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $join = (typia.createAssertEquals as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("function" === typeof input.toJSON ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (["toJSON"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("function" === typeof input.toJSON ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (["toJSON"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("function" === typeof input.toJSON ||
                    $guard(_exceptionable, {
                        path: _path + ".toJSON",
                        expected: "unknown",
                        value: input.toJSON,
                    })) &&
                (1 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (["toJSON"].some((prop: any) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
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
                    (((("object" === typeof input[0] && null !== input[0]) ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "ToJsonAtomicSimple.IToJson<boolean>",
                            value: input[0],
                        })) &&
                        $ao0(input[0], _path + "[0]", true)) ||
                        $guard(true, {
                            path: _path + "[0]",
                            expected: "ToJsonAtomicSimple.IToJson<boolean>",
                            value: input[0],
                        })) &&
                    (((("object" === typeof input[1] && null !== input[1]) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "ToJsonAtomicSimple.IToJson<number>",
                            value: input[1],
                        })) &&
                        $ao1(input[1], _path + "[1]", true)) ||
                        $guard(true, {
                            path: _path + "[1]",
                            expected: "ToJsonAtomicSimple.IToJson<number>",
                            value: input[1],
                        })) &&
                    (((("object" === typeof input[2] && null !== input[2]) ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "ToJsonAtomicSimple.IToJson<string>",
                            value: input[2],
                        })) &&
                        $ao2(input[2], _path + "[2]", true)) ||
                        $guard(true, {
                            path: _path + "[2]",
                            expected: "ToJsonAtomicSimple.IToJson<string>",
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
});
