import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagType } from "../../structures/TagType";

export const test_createAssertPrune_TagType = _test_assertPrune(
    "TagType",
    TagType.generate,
    typia.createAssertPrune<TagType>(),
    TagType.SPOILERS,
);
