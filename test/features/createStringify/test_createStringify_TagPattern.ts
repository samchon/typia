import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagPattern } from "../../structures/TagPattern";

export const test_createStringify_TagPattern = _test_stringify(
    "TagPattern",
    TagPattern.generate,
    typia.createStringify<TagPattern>(),
);
