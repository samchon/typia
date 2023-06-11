import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagType } from "../../structures/TagType";

export const test_validatePrune_TagType = _test_validatePrune(
    "TagType",
    TagType.generate,
    (input) => typia.validatePrune(input),
    TagType.SPOILERS,
);
