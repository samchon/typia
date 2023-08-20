import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { TagFormat } from "../../structures/TagFormat";

export const test_validateClone_TagFormat = _test_validateClone(
    "TagFormat",
    TagFormat.generate,
    (input) => typia.validateClone<TagFormat>(input),
    TagFormat.SPOILERS,
);
