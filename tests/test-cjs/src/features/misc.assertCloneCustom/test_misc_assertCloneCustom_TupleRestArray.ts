import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_assertCloneCustom_TupleRestArray = (): void =>
  _test_misc_assertClone(CustomGuardError)("TupleRestArray")<TupleRestArray>(
    TupleRestArray,
  )((input) =>
    typia.misc.assertClone<TupleRestArray>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
