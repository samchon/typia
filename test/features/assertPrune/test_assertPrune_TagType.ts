import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagType } from "../../structures/TagType";

export const test_assertPrune_TagType = _test_assertPrune(
    "TagType",
    TagType.generate,
    (input) => typia.assertPrune<TagType>(input),
    TagType.SPOILERS,
);
