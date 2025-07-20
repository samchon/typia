import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertEqualsCustom_TupleHierarchical = (): void =>
  _test_assertEquals(CustomGuardError)("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )((input) =>
    typia.assertEquals<TupleHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
