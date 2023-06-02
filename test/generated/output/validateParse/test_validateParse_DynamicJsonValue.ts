import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_validateParse_DynamicJsonValue = _test_validateParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<DynamicJsonValue>> => {
            const validate: any = (
                input: any,
            ): typia.IValidation<DynamicJsonValue> => {
                const __is: any = (input: any): input is DynamicJsonValue => {
                    const $join: any = (typia.validateParse as any).join;
                    const $io0: any = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value: any = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    null === value ||
                                    undefined === value ||
                                    "string" === typeof value ||
                                    ("number" === typeof value &&
                                        Number.isFinite(value)) ||
                                    "boolean" === typeof value ||
                                    (Array.isArray(value) && $ia0(value)) ||
                                    ("object" === typeof value &&
                                        null !== value &&
                                        false === Array.isArray(value) &&
                                        $io0(value))
                                );
                            return true;
                        });
                    const $ia0: any = (input: any): any =>
                        input.every(
                            (elem: any) =>
                                undefined !== elem &&
                                (null === elem ||
                                    "string" === typeof elem ||
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    "boolean" === typeof elem ||
                                    (Array.isArray(elem) && $ia0(elem)) ||
                                    ("object" === typeof elem &&
                                        null !== elem &&
                                        false === Array.isArray(elem) &&
                                        $io0(elem))),
                        );
                    return (
                        undefined !== input &&
                        (null === input ||
                            "string" === typeof input ||
                            ("number" === typeof input &&
                                Number.isFinite(input)) ||
                            "boolean" === typeof input ||
                            (Array.isArray(input) && $ia0(input)) ||
                            ("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input) &&
                                $io0(input)))
                    );
                };
                const errors: any = [] as any[];
                const $report: any = (typia.validateParse as any).report(
                    errors,
                );
                const $join: any = (typia.validateParse as any).join;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicJsonValue => {
                        const $vo0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                false === _exceptionable ||
                                    Object.keys(input)
                                        .map((key: any) => {
                                            const value: any = input[key];
                                            if (undefined === value)
                                                return true;
                                            if (RegExp(/(.*)/).test(key))
                                                return (
                                                    null === value ||
                                                    undefined === value ||
                                                    "string" === typeof value ||
                                                    ("number" ===
                                                        typeof value &&
                                                        Number.isFinite(
                                                            value,
                                                        )) ||
                                                    "boolean" ===
                                                        typeof value ||
                                                    (Array.isArray(value) &&
                                                        $va0(
                                                            value,
                                                            _path,
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    ("object" ===
                                                        typeof value &&
                                                        null !== value &&
                                                        false ===
                                                            Array.isArray(
                                                                value,
                                                            ) &&
                                                        $vo0(
                                                            value,
                                                            _path + $join(key),
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                                                        value: value,
                                                    }) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path + $join(key),
                                                        expected:
                                                            "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string | undefined)",
                                                        value: value,
                                                    })
                                                );
                                            return true;
                                        })
                                        .every((flag: boolean) => flag),
                            ].every((flag: boolean) => flag);
                        const $va0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        (undefined !== elem ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                                                value: elem,
                                            })) &&
                                        (null === elem ||
                                            "string" === typeof elem ||
                                            ("number" === typeof elem &&
                                                Number.isFinite(elem)) ||
                                            "boolean" === typeof elem ||
                                            (Array.isArray(elem) &&
                                                $va0(
                                                    elem,
                                                    _path,
                                                    true && _exceptionable,
                                                )) ||
                                            ("object" === typeof elem &&
                                                null !== elem &&
                                                false === Array.isArray(elem) &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                                                value: elem,
                                            }) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                                                value: elem,
                                            })),
                                )
                                .every((flag: boolean) => flag);
                        return (
                            (undefined !== input ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                                    value: input,
                                })) &&
                            (null === input ||
                                "string" === typeof input ||
                                ("number" === typeof input &&
                                    Number.isFinite(input)) ||
                                "boolean" === typeof input ||
                                (Array.isArray(input) &&
                                    $va0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    )) ||
                                ("object" === typeof input &&
                                    null !== input &&
                                    false === Array.isArray(input) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
                                    value: input,
                                }) ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "(DynamicJsonValue.JsonArray | DynamicJsonValue.JsonObject | boolean | null | number | string)",
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
            };
            input = JSON.parse(input);
            const output: any = validate(input);
            return output as any;
        })(input),
    DynamicJsonValue.SPOILERS,
);
