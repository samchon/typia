import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TagTuple } from "../../structures/TagTuple";

export const test_validatePrune_TagTuple = _test_validatePrune(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.validatePrune(input),
    TagTuple.SPOILERS,
);
