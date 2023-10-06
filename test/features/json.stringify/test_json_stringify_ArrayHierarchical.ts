import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_stringify_ArrayHierarchical = _test_json_stringify(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)((input) => typia.json.stringify<ArrayHierarchical>(input));
