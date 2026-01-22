import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateEqualsFunction_ObjectDescription =
  (): void =>
    _test_functional_validateEqualsFunction("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.validateEqualsFunction(p),
    );
