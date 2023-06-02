import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagStep } from "../../structures/TagStep";

export const test_validateClone_TagStep = _test_validateClone(
    "TagStep",
    TagStep.generate,
    (input) => typia.validateClone(input),
    TagStep.SPOILERS,
);
