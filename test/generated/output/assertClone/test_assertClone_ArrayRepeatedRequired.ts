import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_assertClone_ArrayRepeatedRequired = _test_assertClone(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<string | number | Array<ArrayRepeatedRequired>> => {
            const assert: any = (
                input: any,
            ): string | number | Array<ArrayRepeatedRequired> => {
                const __is: any = (
                    input: any,
                ): input is string | number | Array<ArrayRepeatedRequired> => {
                    const $ia0: any = (input: any): any =>
                        input.every(
                            (elem: any) =>
                                null !== elem &&
                                undefined !== elem &&
                                ("string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    (Array.isArray(elem) && $ia0(elem))),
                        );
                    return (
                        null !== input &&
                        undefined !== input &&
                        ("string" === typeof input ||
                            ("number" === typeof input &&
                                Number.isFinite(input)) ||
                            (Array.isArray(input) && $ia0(input)))
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is
                        | string
                        | number
                        | Array<ArrayRepeatedRequired> => {
                        const $aa0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            input.every(
                                (elem: any, _index1: number) =>
                                    (null !== elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<ArrayRepeatedRequired> | number | string)",
                                            value: elem,
                                        })) &&
                                    (undefined !== elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<ArrayRepeatedRequired> | number | string)",
                                            value: elem,
                                        })) &&
                                    ("string" === typeof elem ||
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedRequired> | number | string)",
                                                value: elem,
                                            })) &&
                                            $aa0(
                                                elem,
                                                _path,
                                                true && _exceptionable,
                                            ))),
                            );
                        return (
                            (null !== input ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedRequired> | number | string)",
                                    value: input,
                                })) &&
                            (undefined !== input ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedRequired> | number | string)",
                                    value: input,
                                })) &&
                            ("string" === typeof input ||
                                ("number" === typeof input &&
                                    Number.isFinite(input)) ||
                                ((Array.isArray(input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected:
                                            "(Array<ArrayRepeatedRequired> | number | string)",
                                        value: input,
                                    })) &&
                                    $aa0(input, _path, true && _exceptionable)))
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone: any = (
                input: string | number | Array<ArrayRepeatedRequired>,
            ): typia.Primitive<
                string | number | Array<ArrayRepeatedRequired>
            > => {
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            ("string" === typeof elem ||
                                "number" === typeof elem ||
                                (Array.isArray(elem) && $ia0(elem))),
                    );
                const $cp0: any = (input: any) => $ca0(input);
                const $ca0: any = (input: any): any =>
                    input.map((elem: any) =>
                        Array.isArray(elem) ? $cp0(elem) : (elem as any),
                    );
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    ArrayRepeatedRequired.SPOILERS,
);
