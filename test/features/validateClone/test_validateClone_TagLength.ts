import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagLength } from "../../structures/TagLength";

export const test_validateClone_TagLength = _test_validateClone(
    "TagLength",
    TagLength.generate,
    (input) => typia.validateClone(input),
    TagLength.SPOILERS,
);
