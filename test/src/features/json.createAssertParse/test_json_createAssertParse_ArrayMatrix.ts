import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ArrayMatrix = (): void => _test_json_assertParse(TypeGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.json.createAssertParse<ArrayMatrix>());
