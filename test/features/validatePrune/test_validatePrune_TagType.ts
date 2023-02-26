import typia from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TagType = _test_validatePrune(
    "TagType",
    TagType.generate,
    (input) => typia.validatePrune(input),
    TagType.SPOILERS,
);
