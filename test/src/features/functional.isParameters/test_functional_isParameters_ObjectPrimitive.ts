import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_isParameters_ObjectPrimitive = (): void =>
  _test_functional_isParameters("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.isParameters(p),
  );
