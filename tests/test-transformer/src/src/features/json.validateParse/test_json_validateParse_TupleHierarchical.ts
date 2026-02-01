import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_validateParse_TupleHierarchical = (): void => _test_json_validateParse(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.json.validateParse<TupleHierarchical>(input));
