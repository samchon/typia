import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TagRange = _test_stringify(
    "TagRange",
    TagRange.generate,
    typia.createStringify<TagRange>(),
);
