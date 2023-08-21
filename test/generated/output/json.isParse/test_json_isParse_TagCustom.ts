import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TagCustom } from "../../../structures/TagCustom";

export const test_json_isParse_TagCustom = _test_json_isParse(
    "TagCustom",
)<TagCustom>(TagCustom)((input) =>
    ((input: any): typia.Primitive<TagCustom> => {
        const is = (input: any): input is TagCustom => {
            const $is_uuid = (typia.json.isParse as any).is_uuid;
            const $is_custom = (typia.json.isParse as any).is_custom;
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
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
