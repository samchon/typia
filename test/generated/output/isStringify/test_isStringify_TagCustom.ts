import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { TagCustom } from "../../../structures/TagCustom";

export const test_isStringify_TagCustom = _test_isStringify(
    "TagCustom",
    TagCustom.generate,
    (input) =>
        ((input: TagCustom): string | null => {
            const is: any = (input: any): input is TagCustom => {
                const $is_uuid: any = (typia.isStringify as any).is_uuid;
                const $is_custom: any = (typia.isStringify as any).is_custom;
                const $io0: any = (input: any): boolean =>
                    "string" === typeof input.id &&
                    $is_uuid(input.id) &&
                    "string" === typeof input.dollar &&
                    $is_custom("dollar", "string", "", input.dollar) &&
                    "string" === typeof input.postfix &&
                    $is_custom("postfix", "string", "abcd", input.postfix) &&
                    "number" === typeof input.log &&
                    Number.isFinite(input.log) &&
                    $is_custom("powerOf", "number", "10", input.log);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const stringify: any = (input: TagCustom): string => {
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $is_uuid: any = (typia.isStringify as any).is_uuid;
                const $is_custom: any = (typia.isStringify as any).is_custom;
                const $so0: any = (input: any): any =>
                    `{"id":${$string(input.id)},"dollar":${$string(
                        input.dollar,
                    )},"postfix":${$string(input.postfix)},"log":${$number(
                        input.log,
                    )}}`;
                return $so0(input);
            };
            return is(input) ? stringify(input) : null;
        })(input),
    TagCustom.SPOILERS,
);
