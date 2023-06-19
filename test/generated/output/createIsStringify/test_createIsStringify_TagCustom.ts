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
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).id &&
                $is_uuid((input as any).id) &&
                "string" === typeof (input as any).dollar &&
                $is_custom("dollar", "string", "", (input as any).dollar) &&
                "string" === typeof (input as any).postfix &&
                $is_custom(
                    "postfix",
                    "string",
                    "abcd",
                    (input as any).postfix,
                ) &&
                "number" === typeof (input as any).log &&
                Number.isFinite((input as any).log) &&
                $is_custom("powerOf", "number", "10", (input as any).log)
            );
        };
        const stringify = (input: TagCustom): string => {
            const $string = (typia.createIsStringify as any).string;
            const $number = (typia.createIsStringify as any).number;
            const $is_uuid = (typia.createIsStringify as any).is_uuid;
            const $is_custom = (typia.createIsStringify as any).is_custom;
            return `{"id":${$string((input as any).id)},"dollar":${$string(
                (input as any).dollar,
            )},"postfix":${$string((input as any).postfix)},"log":${$number(
                (input as any).log,
            )}}`;
        };
        return is(input) ? stringify(input) : null;
    },
    TagCustom.SPOILERS,
);
