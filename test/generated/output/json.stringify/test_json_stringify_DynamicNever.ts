import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_stringify_DynamicNever =
    _test_json_stringify<DynamicNever>(DynamicNever)((input) =>
        ((input: DynamicNever): string => {
            const $join = (typia.json.stringify as any).join;
            const $so0 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${undefined}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        })(input),
    );
