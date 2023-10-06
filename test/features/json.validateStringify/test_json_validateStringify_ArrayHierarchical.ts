import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_validateStringify_ArrayHierarchical = _test_json_validateStringify(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)((input) => typia.json.validateStringify<ArrayHierarchical>(input));
