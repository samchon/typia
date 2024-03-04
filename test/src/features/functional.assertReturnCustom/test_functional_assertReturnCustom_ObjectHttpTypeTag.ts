import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertReturnCustom_ObjectHttpTypeTag =
  _test_functional_assertReturn(CustomGuardError)("ObjectHttpTypeTag")(
    ObjectHttpTypeTag,
  )((p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
