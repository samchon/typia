import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertReturnCustom_ObjectDescription = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
