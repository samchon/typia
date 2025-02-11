import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_assertParameters_ObjectHttpTypeTag =
  _test_functional_assertParameters(TypeGuardError)("ObjectHttpTypeTag")(
    ObjectHttpTypeTag,
  )((p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
    typia.functional.assertParameters(p),
  );
