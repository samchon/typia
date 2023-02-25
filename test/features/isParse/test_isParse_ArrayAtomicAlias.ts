import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ArrayAtomicAlias = _test_isParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.isParse<ArrayAtomicAlias>(input),
    ArrayAtomicAlias.SPOILERS,
);
