import typia from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_random } from "../internal/_test_random";

export const test_random_TagRange = _test_random(
    "TagRange",
    () => typia.random<TagRange>(),
    typia.createAssert<TagRange>(),
);
