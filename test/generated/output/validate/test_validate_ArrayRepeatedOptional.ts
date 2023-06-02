import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ArrayRepeatedOptional } from "../../../structures/ArrayRepeatedOptional";

export const test_validate_ArrayRepeatedOptional = _test_validate(
    "ArrayRepeatedOptional",
    ArrayRepeatedOptional.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            string | number | Array<ArrayRepeatedOptional> | undefined
        > => {
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
            const errors: any = [] as any[];
            const $report: any = (typia.validate as any).report(errors);
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
                    const $va0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    (null !== elem ||
                                        $report(_exceptionable, {
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
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                                                value: elem,
                                            })) &&
                                            $va0(
                                                elem,
                                                _path,
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                                            value: elem,
                                        })),
                            )
                            .every((flag: boolean) => flag);
                    return (
                        (null !== input ||
                            $report(true, {
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
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                                    value: input,
                                })) &&
                                $va0(input, _path, true && _exceptionable)) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "(Array<ArrayRepeatedOptional> | number | string | undefined)",
                                value: input,
                            }))
                    );
                })(input, "$input", true);
            const success: any = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
    ArrayRepeatedOptional.SPOILERS,
);
