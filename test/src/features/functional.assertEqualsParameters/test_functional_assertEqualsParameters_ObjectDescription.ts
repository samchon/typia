import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsParameters_ObjectDescription =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "ObjectDescription",
    )(ObjectDescription)((p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.assertEqualsParameters(p),
    );
