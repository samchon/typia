import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";

export const test_createClone_DynamicJsonValue = _test_clone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input: DynamicJsonValue): typia.Primitive<DynamicJsonValue> => {
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
        const $join: any = (typia.createClone as any).join;
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
    },
);
