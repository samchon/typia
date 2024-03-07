import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TupleHierarchical =
  _test_assertEquals(CustomGuardError)("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(
    typia.createAssertEquals<TupleHierarchical>((p) => new CustomGuardError(p)),
  );
