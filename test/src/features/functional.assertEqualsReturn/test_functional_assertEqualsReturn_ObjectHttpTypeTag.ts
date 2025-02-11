import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertEqualsReturn_ObjectHttpTypeTag =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectHttpTypeTag")(
    ObjectHttpTypeTag,
  )((p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
    typia.functional.assertEqualsReturn(p),
  );
