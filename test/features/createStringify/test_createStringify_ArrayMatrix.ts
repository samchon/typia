import typia from "typia";

import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ArrayMatrix = _test_stringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createStringify<ArrayMatrix>(),
);
