import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_createIsClone_DynamicJsonValue = _test_isClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input: any): typia.Primitive<DynamicJsonValue> | null => {
        const is: any = (input: any): input is DynamicJsonValue => {
            const $join: any = (typia.createIsClone as any).join;
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
                    ("number" === typeof input && Number.isFinite(input)) ||
                    "boolean" === typeof input ||
                    (Array.isArray(input) && $ia0(input)) ||
                    ("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)))
            );
        };
        const clone: any = (
            input: DynamicJsonValue,
        ): typia.Primitive<DynamicJsonValue> => {
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
            const $join: any = (typia.createIsClone as any).join;
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
        if (!is(input)) return null;
        const output: any = clone(input);
        return output;
    },
    DynamicJsonValue.SPOILERS,
);
