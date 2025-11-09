import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_validateParameters_ObjectGenericArray = (): void =>
  _test_functional_validateParameters("ObjectGenericArray")(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      typia.functional.validateParameters(p),
  );
