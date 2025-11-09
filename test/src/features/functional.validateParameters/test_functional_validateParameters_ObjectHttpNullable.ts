import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_validateParameters_ObjectHttpNullable = (): void =>
  _test_functional_validateParameters("ObjectHttpNullable")(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.validateParameters(p),
  );
