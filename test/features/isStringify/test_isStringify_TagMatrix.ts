import TSON from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TagMatrix = _test_isStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) => TSON.isStringify(input),
    TagMatrix.SPOILERS,
);