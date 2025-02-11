import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertParameters_ObjectJsonTag =
  _test_functional_assertParameters(TypeGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertParameters(p),
  );
