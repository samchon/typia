import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_json_assertParse_ArrayAtomicAlias = (): void => _test_json_assertParse(TypeGuardError)(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((input) => typia.json.assertParse<ArrayAtomicAlias>(input));
