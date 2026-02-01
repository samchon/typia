import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createEquals_ArrayAtomicAlias = (): void => _test_equals(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)(typia.createEquals<ArrayAtomicAlias>());
