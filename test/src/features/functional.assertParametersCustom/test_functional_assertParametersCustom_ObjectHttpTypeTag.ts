import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectHttpTypeTag =
  _test_functional_assertParameters(CustomGuardError)("ObjectHttpTypeTag")(
    ObjectHttpTypeTag,
  )((p: (input: ObjectHttpTypeTag) => ObjectHttpTypeTag) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
