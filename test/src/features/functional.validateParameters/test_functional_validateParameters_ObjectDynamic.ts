import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_validateParameters_ObjectDynamic = (): void =>
  _test_functional_validateParameters("ObjectDynamic")(ObjectDynamic)(
    (p: (input: ObjectDynamic) => ObjectDynamic) =>
      typia.functional.validateParameters(p),
  );
