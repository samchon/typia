import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TagLength } from "../../structures/TagLength";

export const test_misc_assertPrune_TagLength = _test_misc_assertPrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.misc.assertPrune(input),
    TagLength.SPOILERS,
);
