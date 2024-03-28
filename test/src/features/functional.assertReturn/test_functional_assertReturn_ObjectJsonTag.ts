import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertReturn_ObjectJsonTag =
  _test_functional_assertReturn(TypeGuardError)("ObjectJsonTag")(ObjectJsonTag)(
    (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
      typia.functional.assertReturn(p),
  );
