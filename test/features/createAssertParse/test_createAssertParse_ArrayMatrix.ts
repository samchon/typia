import typia from "../../../src";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_createAssertParse_ArrayMatrix = _test_assertParse(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssertParse<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);
