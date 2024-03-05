import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateEqualsParameters_ObjectPrimitive =
  _test_functional_validateEqualsParameters("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.validateEqualsParameters(p),
  );
