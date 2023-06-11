import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_validatePrune_TagMatrix = _test_validatePrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validatePrune(input),
    TagMatrix.SPOILERS,
);
