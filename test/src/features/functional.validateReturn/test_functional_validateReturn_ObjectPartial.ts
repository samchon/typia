import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateReturn_ObjectPartial = (): void =>
  _test_functional_validateReturn("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.validateReturn(p),
  );
