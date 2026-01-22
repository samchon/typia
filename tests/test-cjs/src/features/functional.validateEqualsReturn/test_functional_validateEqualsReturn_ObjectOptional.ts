import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateEqualsReturn_ObjectOptional = (): void =>
  _test_functional_validateEqualsReturn("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => ObjectOptional) =>
      typia.functional.validateEqualsReturn(p),
  );
