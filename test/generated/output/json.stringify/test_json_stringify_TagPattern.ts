import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagPattern } from "../../../structures/TagPattern";

export const test_json_stringify_TagPattern = _test_json_stringify(
    "TagPattern",
)<TagPattern>(TagPattern)((input) =>
    ((input: TagPattern): string => {
        const $string = (typia.json.stringify as any).string;
        return `{"uuid":${$string((input as any).uuid)},"email":${$string(
            (input as any).email,
        )},"ipv4":${$string((input as any).ipv4)},"ipv6":${$string(
            (input as any).ipv6,
        )}}`;
    })(input),
);
