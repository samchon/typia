import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagRange } from "../../structures/TagRange";

export const test_is_TagRange = _test_is("TagRange")<TagRange>(TagRange)(
    (input) => typia.is<TagRange>(input),
);
