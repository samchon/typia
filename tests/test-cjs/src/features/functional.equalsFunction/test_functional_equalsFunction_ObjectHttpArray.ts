import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_equalsFunction_ObjectHttpArray = (): void =>
  _test_functional_equalsFunction("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.equalsFunction(p),
  );
