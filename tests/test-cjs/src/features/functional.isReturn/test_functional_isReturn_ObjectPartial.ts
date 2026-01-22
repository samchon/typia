import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_isReturn_ObjectPartial = (): void =>
  _test_functional_isReturn("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.isReturn(p),
  );
