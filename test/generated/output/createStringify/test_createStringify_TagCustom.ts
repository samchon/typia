import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createStringify_TagCustom = _test_stringify(
    "TagCustom",
    TagCustom.generate,
    (input: TagCustom): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $is_uuid = (typia.createStringify as any).is_uuid;
        const $is_custom = (typia.createStringify as any).is_custom;
        return `{"id":${$string((input as any).id)},"dollar":${$string(
            (input as any).dollar,
        )},"postfix":${$string((input as any).postfix)},"log":${$number(
            (input as any).log,
        )}}`;
    },
);
