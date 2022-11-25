import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagPattern = _test_equals(
    "TagPattern",
    TagPattern.generate,
    TSON.createEquals<TagPattern>(),
);
