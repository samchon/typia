import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_stringify_DynamicTemplate =
    _test_json_stringify<DynamicTemplate>(DynamicTemplate)(
        (input: DynamicTemplate): string => {
            const $join = (typia.json.createStringify as any).join;
            const $string = (typia.json.createStringify as any).string;
            const $number = (typia.json.createStringify as any).number;
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
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        },
    );
