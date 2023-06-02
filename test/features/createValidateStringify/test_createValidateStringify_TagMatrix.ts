import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagMatrix } from "../../structures/TagMatrix";

export const test_createValidateStringify_TagMatrix = _test_validateStringify(
    "TagMatrix",
    TagMatrix.generate,
    typia.createValidateStringify<TagMatrix>(),
    TagMatrix.SPOILERS,
);
