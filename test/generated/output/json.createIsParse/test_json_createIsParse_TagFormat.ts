import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TagFormat } from "../../../structures/TagFormat";

export const test_json_isParse_TagFormat = _test_json_isParse(
    "TagFormat",
)<TagFormat>(TagFormat)((input: any): typia.Primitive<TagFormat> => {
    const is = (input: any): input is TagFormat => {
        const $is_uuid = (typia.json.createIsParse as any).is_uuid;
        const $is_email = (typia.json.createIsParse as any).is_email;
        const $is_url = (typia.json.createIsParse as any).is_url;
        const $is_ipv4 = (typia.json.createIsParse as any).is_ipv4;
        const $is_ipv6 = (typia.json.createIsParse as any).is_ipv6;
        const $is_date = (typia.json.createIsParse as any).is_date;
        const $is_datetime = (typia.json.createIsParse as any).is_datetime;
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).uuid &&
            $is_uuid((input as any).uuid) &&
            "string" === typeof (input as any).email &&
            $is_email((input as any).email) &&
            "string" === typeof (input as any).url &&
            $is_url((input as any).url) &&
            "string" === typeof (input as any).ipv4 &&
            $is_ipv4((input as any).ipv4) &&
            "string" === typeof (input as any).ipv6 &&
            $is_ipv6((input as any).ipv6) &&
            "string" === typeof (input as any).date &&
            $is_date((input as any).date) &&
            "string" === typeof (input as any).date_time &&
            $is_datetime((input as any).date_time) &&
            "string" === typeof (input as any).custom
        );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
});
