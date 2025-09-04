import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_isFunction_ObjectPartial = (): void =>
  _test_functional_isFunction("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.isFunction(p),
  );
