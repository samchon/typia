import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_createValidateParse_ArrayAtomicSimple = (): void => _test_json_validateParse(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)(typia.json.createValidateParse<ArrayAtomicSimple>());
