import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_createStringify_ArrayMatrix = _test_json_stringify(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)(typia.json.createStringify<ArrayMatrix>());
