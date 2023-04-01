import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_stringify_TagCustom = _test_stringify(
    "TagCustom",
    TagCustom.generate,
    (input) =>
        ((input: TagCustom): string => {
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            const $is_uuid = (typia.stringify as any).is_uuid;
            const $is_custom = (typia.stringify as any).is_custom;
            const $so0 = (input: any): any =>
                `{"id":${'"' + input.id + '"'},"dollar":${$string(
                    input.dollar,
                )},"postfix":${$string(input.postfix)},"log":${$number(
                    input.log,
                )}}`;
            return $so0(input);
        })(input),
);
