import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_assertCloneCustom_TupleRestObject =
  _test_misc_assertClone(CustomGuardError)("TupleRestObject")<TupleRestObject>(
    TupleRestObject,
  )((input) =>
    typia.misc.assertClone<TupleRestObject>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
