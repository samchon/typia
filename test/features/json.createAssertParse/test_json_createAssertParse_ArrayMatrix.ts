import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_assertParse_ArrayMatrix = _test_json_assertParse(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)(typia.json.createAssertParse<ArrayMatrix>());
