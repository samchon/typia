import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagPattern } from "../../../structures/TagPattern";

export const test_stringify_TagPattern = _test_stringify(
    "TagPattern",
    TagPattern.generate,
    (input) =>
        ((input: TagPattern): string => {
            const $string = (typia.stringify as any).string;
            const $so0 = (input: any): any =>
                `{"uuid":${$string(input.uuid)},"email":${$string(
                    input.email,
                )},"ipv4":${$string(input.ipv4)},"ipv6":${$string(
                    input.ipv6,
                )}}`;
            return $so0(input);
        })(input),
);
