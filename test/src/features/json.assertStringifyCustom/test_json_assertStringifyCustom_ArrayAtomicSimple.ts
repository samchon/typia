import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayAtomicSimple = (): void => _test_json_assertStringify(CustomGuardError)(
    "ArrayAtomicSimple",
)<ArrayAtomicSimple>(
    ArrayAtomicSimple
)((input) => typia.json.assertStringify<ArrayAtomicSimple>(input, (p) => new CustomGuardError(p)));
