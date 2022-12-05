import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagMatrix = _test_validateClone(
    "TagMatrix",
    TagMatrix.generate,
    (input) => TSON.validateClone(input),
    TagMatrix.SPOILERS,
);
