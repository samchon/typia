import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_assertReturnCustom_ObjectJsonTag = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectJsonTag")(
    ObjectJsonTag,
  )((p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
