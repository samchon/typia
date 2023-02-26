import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_validateClone_TagMatrix = _test_validateClone(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validateClone(input),
    TagMatrix.SPOILERS,
);
