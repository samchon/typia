import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_validateEquals_ArrayAtomicAlias = (): void => _test_validateEquals(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((input) => typia.validateEquals<ArrayAtomicAlias>(input));
