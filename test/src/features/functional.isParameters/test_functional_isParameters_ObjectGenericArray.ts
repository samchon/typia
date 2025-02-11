import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_isParameters_ObjectGenericArray =
  _test_functional_isParameters("ObjectGenericArray")(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      typia.functional.isParameters(p),
  );
