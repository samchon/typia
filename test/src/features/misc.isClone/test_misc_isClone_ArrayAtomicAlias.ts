import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_misc_isClone_ArrayAtomicAlias = (): void => _test_misc_isClone(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((input) => typia.misc.isClone<ArrayAtomicAlias>(input));
