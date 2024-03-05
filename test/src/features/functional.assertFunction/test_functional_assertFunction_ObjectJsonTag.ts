import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertFunction_ObjectJsonTag =
  _test_functional_assertFunction(TypeGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertFunction(p),
  );
