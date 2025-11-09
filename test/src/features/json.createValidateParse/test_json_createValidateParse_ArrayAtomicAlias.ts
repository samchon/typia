import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_createValidateParse_ArrayAtomicAlias = (): void => _test_json_validateParse(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)(typia.json.createValidateParse<ArrayAtomicAlias>());
