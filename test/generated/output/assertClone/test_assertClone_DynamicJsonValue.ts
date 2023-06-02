import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_assertClone_DynamicJsonValue = _test_assertClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            | string
            | number
            | boolean
            | DynamicJsonValue.JsonObject
            | DynamicJsonValue.JsonArray
            | null
        > => {
            const assert: any = (
                input: any,
            ):
                | string
                | number
                | boolean
                | DynamicJsonValue.JsonObject
                | DynamicJsonValue.JsonArray
                | null => {
                const __is: any = (
                    input: any,
                ): input is
                    | string
                    | number
                    | boolean
                    | DynamicJsonValue.JsonObject
                    | DynamicJsonValue.JsonArray
                    | null => {
                    const $join: any = (typia.assertClone as any).join;
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
                const $guard: any = (typia.assertClone as any).guard;
                const $join: any = (typia.assertClone as any).join;
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
                        const $ao0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
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
                                        (Array.isArray(value) &&
                                            $aa0(
                                                value,
                                                _path,
                                                true && _exceptionable,
                                            )) ||
                                        ("object" === typeof value &&
                                            null !== value &&
                                            false === Array.isArray(value) &&
                                            $ao0(
                                                value,
                                                _path + $join(key),
                                                true && _exceptionable,
                                            ))
                                    );
                                return true;
                            });
                        const $aa0: any = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            input.every(
                                (elem: any, _index1: number) =>
                                    (undefined !== elem ||
                                        $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
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
                                            $aa0(
                                                elem,
                                                _path,
                                                true && _exceptionable,
                                            )) ||
                                        ("object" === typeof elem &&
                                            null !== elem &&
                                            false === Array.isArray(elem) &&
                                            $ao0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true && _exceptionable,
                                            ))),
                            );
                        return (
                            (undefined !== input ||
                                $guard(true, {
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
                                    $aa0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    )) ||
                                ("object" === typeof input &&
                                    null !== input &&
                                    false === Array.isArray(input) &&
                                    $ao0(input, _path + "", true)))
                        );
                    })(input, "$input", true);
                return input;
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
                const $join: any = (typia.assertClone as any).join;
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
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    DynamicJsonValue.SPOILERS,
);
