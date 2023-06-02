import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createStringify_TagCustom = _test_stringify(
    "TagCustom",
    TagCustom.generate,
    (input: TagCustom): string => {
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $is_uuid: any = (typia.createStringify as any).is_uuid;
        const $is_custom: any = (typia.createStringify as any).is_custom;
        const $so0: any = (input: any): any =>
            `{"id":${$string(input.id)},"dollar":${$string(
                input.dollar,
            )},"postfix":${$string(input.postfix)},"log":${$number(
                input.log,
            )}}`;
        return $so0(input);
    },
);
