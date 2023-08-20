import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_stringify_TagPattern = _test_stringify(
    "TagPattern",
    TagPattern.generate,
    (input) => typia.stringify<TagPattern>(input),
);
