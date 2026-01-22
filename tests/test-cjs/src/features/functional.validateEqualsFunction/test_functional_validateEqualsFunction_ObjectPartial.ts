import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateEqualsFunction_ObjectPartial = (): void =>
  _test_functional_validateEqualsFunction("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.validateEqualsFunction(p),
  );
