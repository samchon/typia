import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TagPattern } from "../../../structures/TagPattern";

export const test_createStringify_TagPattern = _test_stringify(
    "TagPattern",
    TagPattern.generate,
    (input: TagPattern): string => {
        const $string = (typia.createStringify as any).string;
        return `{"uuid":${$string((input as any).uuid)},"email":${$string(
            (input as any).email,
        )},"ipv4":${$string((input as any).ipv4)},"ipv6":${$string(
            (input as any).ipv6,
        )}}`;
    },
);
