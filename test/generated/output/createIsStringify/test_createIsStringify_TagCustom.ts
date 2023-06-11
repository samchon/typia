import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_createIsStringify_TagCustom = _test_isStringify(
    "TagCustom",
    TagCustom.generate,
    (input: TagCustom): string | null => {
        const is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.createIsStringify as any).is_uuid;
            const $is_custom = (typia.createIsStringify as any).is_custom;
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                $is_uuid(input.id) &&
                "string" === typeof input.dollar &&
                $is_custom("dollar", "string", "", input.dollar) &&
                "string" === typeof input.postfix &&
                $is_custom("postfix", "string", "abcd", input.postfix) &&
                "number" === typeof input.log &&
                Number.isFinite(input.log) &&
                $is_custom("powerOf", "number", "10", input.log);
            return "object" === typeof input && null !== input && $io0(input);
        };
        const stringify = (input: TagCustom): string => {
            const $string = (typia.createIsStringify as any).string;
            const $number = (typia.createIsStringify as any).number;
            const $is_uuid = (typia.createIsStringify as any).is_uuid;
            const $is_custom = (typia.createIsStringify as any).is_custom;
            const $so0 = (input: any): any =>
                `{"id":${$string(input.id)},"dollar":${$string(
                    input.dollar,
                )},"postfix":${$string(input.postfix)},"log":${$number(
                    input.log,
                )}}`;
            return $so0(input);
        };
        return is(input) ? stringify(input) : null;
    },
    TagCustom.SPOILERS,
);
