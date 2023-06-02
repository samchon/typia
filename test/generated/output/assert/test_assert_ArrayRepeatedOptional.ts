import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_assert_ArrayRepeatedOptional = _test_assert(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    (input) =>
        ((
            input: any,
        ): string | number | Array<ArrayRepeatedOptional> | undefined => {
            const __is: any = (
                input: any,
            ): input is
                | string
                | number
                | Array<ArrayRepeatedOptional>
                | undefined => {
                const $ia0: any = (input: any): any =>
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            (undefined === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                (Array.isArray(elem) && $ia0(elem))),
                    );
                return (
                    null !== input &&
                    (undefined === input ||
                        "string" === typeof input ||
                        ("number" === typeof input && Number.isFinite(input)) ||
                        (Array.isArray(input) && $ia0(input)))
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is
                    | string
                    | number
                    | Array<ArrayRepeatedOptional>
                    | undefined => {
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
                                            "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                                        value: elem,
                                    })) &&
                                (undefined === elem ||
                                    "string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    ((Array.isArray(elem) ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<ArrayRepeatedOptional> | number | string | undefined)",
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
                                    "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                                value: input,
                            })) &&
                        (undefined === input ||
                            "string" === typeof input ||
                            ("number" === typeof input &&
                                Number.isFinite(input)) ||
                            ((Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                                    value: input,
                                })) &&
                                $aa0(input, _path, true && _exceptionable)))
                    );
                })(input, "$input", true);
            return input;
        })(input),
    ArrayRepeatedOptional.SPOILERS,
);
