import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_json_createValidateParse_TupleHierarchical = (): void => _test_json_validateParse(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.json.createValidateParse<TupleHierarchical>());
