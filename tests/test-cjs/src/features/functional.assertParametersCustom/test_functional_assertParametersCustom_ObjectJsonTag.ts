import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertParametersCustom_ObjectJsonTag = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
