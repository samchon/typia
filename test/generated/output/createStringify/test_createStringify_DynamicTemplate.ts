import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_createStringify_DynamicTemplate = _test_stringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input: DynamicTemplate): string => {
        const $join: any = (typia.createStringify as any).join;
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $so0: any = (input: any): any =>
            `{${Object.entries(input)
                .map(([key, value]: [string, any]) => {
                    if (undefined === value) return "";
                    if (RegExp(/^(prefix_(.*))/).test(key))
                        return `${JSON.stringify(key)}:${$string(value)}`;
                    if (RegExp(/((.*)_postfix)$/).test(key))
                        return `${JSON.stringify(key)}:${$string(value)}`;
                    if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                        return `${JSON.stringify(key)}:${$number(value)}`;
                    if (RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key))
                        return `${JSON.stringify(key)}:${value}`;
                })
                .filter((str: any) => "" !== str)
                .join(",")}}`;
        return $so0(input);
    },
);
