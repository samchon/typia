import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_createIsStringify_DynamicSimple = _test_isStringify(
    "DynamicSimple",
    DynamicSimple.generate,
    (input: DynamicSimple): string | null => {
        const is: any = (input: any): input is DynamicSimple => {
            const $join: any = (typia.createIsStringify as any).join;
            const $io0: any = (input: any): boolean =>
                Object.keys(input).every((key: any) => {
                    const value: any = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            "number" === typeof value && Number.isFinite(value)
                        );
                    return true;
                });
            return (
                "object" === typeof input &&
                null !== input &&
                false === Array.isArray(input) &&
                $io0(input)
            );
        };
        const stringify: any = (input: DynamicSimple): string => {
            const $join: any = (typia.createIsStringify as any).join;
            const $number: any = (typia.createIsStringify as any).number;
            const $so0: any = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$number(value)}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    DynamicSimple.SPOILERS,
);
