import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TagFormat } from "../../structures/TagFormat";

export const test_assertPrune_TagFormat = _test_assertPrune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.assertPrune<TagFormat>(input),
    TagFormat.SPOILERS,
);
