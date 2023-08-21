import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagArray } from "../../structures/TagArray";

export const test_equals_TagArray = _test_equals("TagArray")<TagArray>(
    TagArray,
)(typia.createEquals<TagArray>());
