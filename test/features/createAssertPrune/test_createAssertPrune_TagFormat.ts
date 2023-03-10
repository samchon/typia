import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_createAssertPrune_TagFormat = _test_assertPrune(
    "TagFormat",
    TagFormat.generate,
    typia.createAssertPrune<TagFormat>(),
    TagFormat.SPOILERS,
);
