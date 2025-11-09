import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_json_assertParse_TupleHierarchical = (): void => _test_json_assertParse(TypeGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.json.assertParse<TupleHierarchical>(input));
