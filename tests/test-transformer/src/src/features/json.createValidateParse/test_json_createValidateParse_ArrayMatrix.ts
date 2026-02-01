import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_createValidateParse_ArrayMatrix = (): void => _test_json_validateParse(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.json.createValidateParse<ArrayMatrix>());
