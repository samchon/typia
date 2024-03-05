import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateEqualsParameters_ObjectDescription =
  _test_functional_validateEqualsParameters("ObjectDescription")(
    ObjectDescription,
  )((p: (input: ObjectDescription) => ObjectDescription) =>
    typia.functional.validateEqualsParameters(p),
  );
