import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_ArrayAtomicAlias = _test_isParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.createIsParse<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
