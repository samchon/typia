import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_createAssertEqualsCustom_ArrayAtomicSimple =
  _test_assertEquals(CustomGuardError)("ArrayAtomicSimple")<ArrayAtomicSimple>(
    ArrayAtomicSimple,
  )(
    typia.createAssertEquals<ArrayAtomicSimple>((p) => new CustomGuardError(p)),
  );
