import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TupleHierarchical = (): void => _test_json_assertStringify(TypeGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.json.assertStringify<TupleHierarchical>(input));
