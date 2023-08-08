import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { TagCustom } from "../../../structures/TagCustom";

export const test_equals_TagCustom = _test_equals(
    "TagCustom",
    TagCustom.generate,
    (input: any, _exceptionable: boolean = true): input is TagCustom => {
        const $is_uuid = (typia.createEquals as any).is_uuid;
        const $is_custom = (typia.createEquals as any).is_custom;
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            $is_uuid(input.id) &&
            "string" === typeof input.dollar &&
            $is_custom("dollar", "string", "", input.dollar) &&
            "string" === typeof input.postfix &&
            $is_custom("postfix", "string", "abcd", input.postfix) &&
            "number" === typeof input.log &&
            Number.isFinite(input.log) &&
            $is_custom("powerOf", "number", "10", input.log) &&
            (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["id", "dollar", "postfix", "log"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
