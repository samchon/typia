import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TupleHierarchical = (): void => _test_json_assertParse(CustomGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.json.createAssertParse<TupleHierarchical>((p) => new CustomGuardError(p)));
