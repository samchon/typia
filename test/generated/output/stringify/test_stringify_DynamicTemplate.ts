import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_stringify_DynamicTemplate = _test_stringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) =>
        ((input: DynamicTemplate): string => {
            const $join = (typia.stringify as any).join;
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            const $so0 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        if (RegExp(/^(prefix_(.*))/).test(key))
                            return `${JSON.stringify(key)}:${$string(value)}`;
                        if (RegExp(/((.*)_postfix)$/).test(key))
                            return `${JSON.stringify(key)}:${$string(value)}`;
                        if (RegExp(/^(value_-?\d+\.?\d*)$/).test(key))
                            return `${JSON.stringify(key)}:${$number(value)}`;
                        if (
                            RegExp(/^(between_(.*)_and_-?\d+\.?\d*)$/).test(key)
                        )
                            return `${JSON.stringify(key)}:${value}`;
                    })
                    .filter((str) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        })(input),
);
