import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_json_isParse_ArrayMatrix = _test_json_isParse(
    "ArrayMatrix",
)<ArrayMatrix>(ArrayMatrix)((input) => typia.json.isParse<ArrayMatrix>(input));
