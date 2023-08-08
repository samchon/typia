import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TagLength } from "../../structures/TagLength";

export const test_misc_isPrune_TagLength = _test_misc_isPrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.misc.isPrune(input),
    TagLength.SPOILERS,
);
