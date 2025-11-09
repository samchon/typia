import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateEqualsFunction_ObjectOptional = (): void =>
  _test_functional_validateEqualsFunction("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => ObjectOptional) =>
      typia.functional.validateEqualsFunction(p),
  );
