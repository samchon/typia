import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertParameters_ObjectDescription = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.assertParameters(p),
  );
