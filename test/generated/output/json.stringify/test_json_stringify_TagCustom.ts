import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_json_stringify_TagCustom = _test_json_stringify<TagCustom>(
    TagCustom,
)((input) =>
    ((input: TagCustom): string => {
        const $string = (typia.json.stringify as any).string;
        const $number = (typia.json.stringify as any).number;
        const $is_uuid = (typia.json.stringify as any).is_uuid;
        const $is_custom = (typia.json.stringify as any).is_custom;
        return `{"id":${$string((input as any).id)},"dollar":${$string(
            (input as any).dollar,
        )},"postfix":${$string((input as any).postfix)},"log":${$number(
            (input as any).log,
        )}}`;
    })(input),
);
