import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagPattern } from "../../structures/TagPattern";

export const test_equals_TagPattern = _test_equals(
    "TagPattern",
    TagPattern.generate,
    typia.createEquals<TagPattern>(),
);
