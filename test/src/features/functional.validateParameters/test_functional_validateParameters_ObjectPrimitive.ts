import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateParameters_ObjectPrimitive =
  _test_functional_validateParameters("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.validateParameters(p),
  );
