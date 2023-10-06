import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_createStringify_ToJsonArray = _test_json_stringify(
    "ToJsonArray",
)<ToJsonArray>(ToJsonArray)((input: ToJsonArray): string => {
    const $number = (typia.json.createStringify as any).number;
    const $string = (typia.json.createStringify as any).string;
    return `[${`[${input[0]
        .toJSON()
        .map((elem: any) => elem)
        .join(",")}]`},${`[${input[1]
        .toJSON()
        .map((elem: any) => $number(elem))
        .join(",")}]`},${`[${input[2]
        .toJSON()
        .map((elem: any) => $string(elem))
        .join(",")}]`},${`[${input[3]
        .toJSON()
        .map((elem: any) => `{"id":${$string((elem as any).id)}}`)
        .join(",")}]`}]`;
});
