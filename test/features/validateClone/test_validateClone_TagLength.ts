import typia from "../../../src";
import { TagLength } from "../../structures/TagLength";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagLength = _test_validateClone(
    "TagLength",
    TagLength.generate,
    (input) => typia.validateClone(input),
    TagLength.SPOILERS,
);
