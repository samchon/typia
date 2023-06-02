import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_validateClone_DynamicJsonValue = _test_validateClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) =>
        ((
            input: any,
        ): typia.IValidation<
            typia.Primitive<
                | string
                | number
                | boolean
                | DynamicJsonValue.JsonObject
                | DynamicJsonValue.JsonArray
                | null
            >
        > => {
            const validate: any = (
                input: any,
            ): typia.IValidation<
                | string
                | number
                | boolean
                | DynamicJsonValue.JsonObject
                | DynamicJsonValue.JsonArray
                | null
            > => {
                const __is: any = (
                    input: any,
                ): input is
                    | string
                    | number
                    | boolean
                    | DynamicJsonValue.JsonObject
                    | DynamicJsonValue.JsonArray
                    | null => {
                    const $join: any = (typia.validateClone as any).join;
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
                const $report: any = (typia.validateClone as any).report(
                    errors,
                );
                const $join: any = (typia.validateClone as any).join;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is
                        | string
                        | number
                        | boolean
                        | DynamicJsonValue.JsonObject
                        | DynamicJsonValue.JsonArray
                        | null => {
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
            const clone: any = (
                input:
                    | string
                    | number
                    | boolean
                    | DynamicJsonValue.JsonObject
                    | DynamicJsonValue.JsonArray
                    | null,
            ): typia.Primitive<
                | string
                | number
                | boolean
                | DynamicJsonValue.JsonObject
                | DynamicJsonValue.JsonArray
                | null
            > => {
                const $io0: any = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value: any = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                null === value ||
                                undefined === value ||
                                "string" === typeof value ||
                                "number" === typeof value ||
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
                                "number" === typeof elem ||
                                "boolean" === typeof elem ||
                                (Array.isArray(elem) && $ia0(elem)) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    false === Array.isArray(elem) &&
                                    $io0(elem))),
                    );
                const $join: any = (typia.validateClone as any).join;
                const $cp0: any = (input: any) => $ca0(input);
                const $co0: any = (input: any): any => {
                    const output: any = {} as any;
                    for (const [key, value] of Object.entries(input)) {
                        if (RegExp(/(.*)/).test(key)) {
                            output[key] = Array.isArray(value)
                                ? $cp0(value)
                                : "object" === typeof value && null !== value
                                ? $co0(value)
                                : (value as any);
                            continue;
                        }
                    }
                    return output;
                };
                const $ca0: any = (input: any): any =>
                    input.map((elem: any) =>
                        Array.isArray(elem)
                            ? $cp0(elem)
                            : "object" === typeof elem && null !== elem
                            ? $co0(elem)
                            : (elem as any),
                    );
                return Array.isArray(input)
                    ? $cp0(input)
                    : "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output: any = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    DynamicJsonValue.SPOILERS,
);
