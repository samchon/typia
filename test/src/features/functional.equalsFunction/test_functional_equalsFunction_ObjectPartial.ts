import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_equalsFunction_ObjectPartial = (): void =>
  _test_functional_equalsFunction("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.equalsFunction(p),
  );
