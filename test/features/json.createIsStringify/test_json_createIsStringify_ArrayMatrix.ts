import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_createIsStringify_ArrayMatrix = _test_json_isStringify(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.json.createIsStringify<ArrayMatrix>());
