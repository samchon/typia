import typia from "typia";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ArrayAtomicAlias = _test_validateEquals(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.validateEquals(input),
);
