import typia from "../../../src";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_createAssertStringify_ArrayMatrix = _test_json_assertStringify(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.json.createAssertStringify<ArrayMatrix>());
