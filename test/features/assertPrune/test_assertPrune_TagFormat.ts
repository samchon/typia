import typia from "../../../src";
import { TagFormat } from "../../structures/TagFormat";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagFormat = _test_assertPrune(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.assertPrune(input),
    TagFormat.SPOILERS,
);
