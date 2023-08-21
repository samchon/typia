import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_json_stringify_TagCustom = _test_json_stringify(
    "TagCustom",
)<TagCustom>(TagCustom)((input: TagCustom): string => {
    const $string = (typia.json.createStringify as any).string;
    const $number = (typia.json.createStringify as any).number;
    const $is_uuid = (typia.json.createStringify as any).is_uuid;
    const $is_custom = (typia.json.createStringify as any).is_custom;
    return `{"id":${$string((input as any).id)},"dollar":${$string(
        (input as any).dollar,
    )},"postfix":${$string((input as any).postfix)},"log":${$number(
        (input as any).log,
    )}}`;
});
