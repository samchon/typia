import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TagMatrix = _test_validateEquals(
    "TagMatrix",
    TagMatrix.generate,
    typia.createValidateEquals<TagMatrix>(),
);
