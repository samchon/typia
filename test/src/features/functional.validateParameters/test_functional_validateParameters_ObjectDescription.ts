import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateParameters_ObjectDescription =
  _test_functional_validateParameters("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.validateParameters(p),
  );
