import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_validateParse_TagMatrix = _test_validateParse(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validateParse<TagMatrix>(input),
    TagMatrix.SPOILERS,
);
