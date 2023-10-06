import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_createStringify_DynamicUndefined = _test_json_stringify(
    "DynamicUndefined",
)<DynamicUndefined>(DynamicUndefined)((input: DynamicUndefined): string => {
    const $so0 = (input: any): any =>
        `{${Object.entries(input)
            .map(([key, value]: [string, any]) => {
                if (undefined === value) return "";
                return `${JSON.stringify(key)}:${undefined}`;
            })
            .filter((str: any) => "" !== str)
            .join(",")}}`;
    return $so0(input);
});
