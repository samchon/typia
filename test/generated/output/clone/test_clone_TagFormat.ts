import typia from "../../../../src";
import { _test_clone } from "../../../internal/_test_clone";
import { TagFormat } from "../../../structures/TagFormat";
export const test_clone_TagFormat = _test_clone("TagFormat", TagFormat.generate, (input) => ((input: TagFormat): typia.Primitive<TagFormat> => {
    const $is_uuid = (typia.clone as any).is_uuid;
    const $is_email = (typia.clone as any).is_email;
    const $is_url = (typia.clone as any).is_url;
    const $is_ipv4 = (typia.clone as any).is_ipv4;
    const $is_ipv6 = (typia.clone as any).is_ipv6;
    const $is_date = (typia.clone as any).is_date;
    const $is_datetime = (typia.clone as any).is_datetime;
    const $co0 = (input: any): any => ({
        uuid: input.uuid as any,
        email: input.email as any,
        url: input.url as any,
        ipv4: input.ipv4 as any,
        ipv6: input.ipv6 as any,
        date: input.date as any,
        date_time: input.date_time as any,
        datetime: input.datetime as any,
        dateTime: input.dateTime as any,
        custom: input.custom as any
    });
    return "object" === typeof input && null !== input ? $co0(input) : input as any;
})(input));
