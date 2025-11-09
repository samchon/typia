import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_isStringify_TupleHierarchical = (): void => _test_json_isStringify(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.json.isStringify<TupleHierarchical>(input));
