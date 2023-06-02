import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_TagMatrix = _test_validate(
    "TagMatrix",
    TagMatrix.generate,
    typia.createValidate<TagMatrix>(),
    TagMatrix.SPOILERS,
);
