import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_validateStringify_TagMatrix = _test_validateStringify(
    "TagMatrix",
    TagMatrix.generate,
    (input) => typia.validateStringify(input),
    TagMatrix.SPOILERS,
);
