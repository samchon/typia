import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagPattern } from "../../../structures/TagPattern";

export const test_json_isStringify_TagPattern = _test_json_isStringify(
    "TagPattern",
)<TagPattern>(TagPattern)((input: TagPattern): string | null => {
    const is = (input: any): input is TagPattern => {
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).uuid &&
            RegExp(
                /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[4][0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}$/,
            ).test((input as any).uuid) &&
            "string" === typeof (input as any).email &&
            RegExp(
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
            ).test((input as any).email) &&
            "string" === typeof (input as any).ipv4 &&
            RegExp(
                /(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            ).test((input as any).ipv4) &&
            "string" === typeof (input as any).ipv6 &&
            RegExp(
                /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
            ).test((input as any).ipv6)
        );
    };
    const stringify = (input: TagPattern): string => {
        const $string = (typia.json.createIsStringify as any).string;
        return `{"uuid":${$string((input as any).uuid)},"email":${$string(
            (input as any).email,
        )},"ipv4":${$string((input as any).ipv4)},"ipv6":${$string(
            (input as any).ipv6,
        )}}`;
    };
    return is(input) ? stringify(input) : null;
});
