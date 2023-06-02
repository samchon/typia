import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../../structures/FunctionalPropertyUnion";

export const test_createAssertEquals_FunctionalPropertyUnion =
    _test_assertEquals(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        (input: any): FunctionalPropertyUnion => {
            const __is: any = (
                input: any,
                _exceptionable: boolean = true,
            ): input is FunctionalPropertyUnion => {
                const $io0: any = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.name &&
                    (null === input.closure ||
                        undefined === input.closure ||
                        "function" === typeof input.closure ||
                        "string" === typeof input.closure ||
                        ("number" === typeof input.closure &&
                            Number.isFinite(input.closure))) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["name", "closure"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value: any = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem, true),
                    )
                );
            };
            const $guard: any = (typia.createAssertEquals as any).guard;
            const $join: any = (typia.createAssertEquals as any).join;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is FunctionalPropertyUnion => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (null === input.closure ||
                            undefined === input.closure ||
                            "function" === typeof input.closure ||
                            "string" === typeof input.closure ||
                            ("number" === typeof input.closure &&
                                Number.isFinite(input.closure)) ||
                            $guard(_exceptionable, {
                                path: _path + ".closure",
                                expected:
                                    "(null | number | string | undefined)",
                                value: input.closure,
                            })) &&
                        (1 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["name", "closure"].some(
                                        (prop: any) => key === prop,
                                    )
                                )
                                    return true;
                                const value: any = input[key];
                                if (undefined === value) return true;
                                return $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            }));
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "FunctionalPropertyUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "FunctionalPropertyUnion.IUnion",
                                        value: elem,
                                    })) &&
                                $ao0(elem, _path + "[" + _index1 + "]", true),
                        )
                    );
                })(input, "$input", true);
            return input;
        },
    );
