import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagLength } from "../../structures/TagLength";

export const test_validatePrune_TagLength = _test_validatePrune(
    "TagLength",
    TagLength.generate,
    (input) => typia.validatePrune<TagLength>(input),
    TagLength.SPOILERS,
);
