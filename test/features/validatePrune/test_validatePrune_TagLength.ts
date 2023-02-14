import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagLength = _test_validatePrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.validatePrune(input),
    TagLength.SPOILERS,
);