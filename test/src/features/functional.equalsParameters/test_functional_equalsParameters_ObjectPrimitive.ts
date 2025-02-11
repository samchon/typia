import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_equalsParameters_ObjectPrimitive =
  _test_functional_equalsParameters("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.equalsParameters(p),
  );
