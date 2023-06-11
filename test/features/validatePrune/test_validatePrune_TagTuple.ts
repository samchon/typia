import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_validatePrune_TagTuple = _test_validatePrune(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.validatePrune(input),
    TagTuple.SPOILERS,
);
