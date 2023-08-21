import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TagTuple } from "../../structures/TagTuple";

export const test_equals_TagTuple = _test_equals("TagTuple")<TagTuple>(
    TagTuple,
)(typia.createEquals<TagTuple>());
