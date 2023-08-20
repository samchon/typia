import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagRange } from "../../structures/TagRange";

export const test_stringify_TagRange = _test_stringify(
    "TagRange",
    TagRange.generate,
    (input) => typia.stringify<TagRange>(input),
);
