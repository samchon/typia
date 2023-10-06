import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { SetUnion } from "../../../structures/SetUnion";

export const test_json_createStringify_SetUnion = _test_json_stringify(
    "SetUnion",
)<SetUnion>(SetUnion)((input: SetUnion): string => {
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    return `[${input.map((elem: any) => "{}").join(",")}]`;
});
