import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateFunction_ObjectOptional = (): void =>
  _test_functional_validateFunction("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => ObjectOptional) =>
      typia.functional.validateFunction(p),
  );
