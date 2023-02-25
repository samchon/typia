import typia from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_TagPattern = _test_stringify("TagPattern", TagPattern.generate, (input: TagPattern): string => {
    const $string = (typia.createStringify as any).string;
    const $so0 = (input: any) => `{"uuid":${$string(input.uuid)},"email":${$string(input.email)},"url":${$string(input.url)},"ipv4":${$string(input.ipv4)},"ipv6":${$string(input.ipv6)}}`;
    return $so0(input);
});
