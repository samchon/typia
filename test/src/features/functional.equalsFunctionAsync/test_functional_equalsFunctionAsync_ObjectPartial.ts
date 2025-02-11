import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_equalsFunctionAsync_ObjectPartial =
  _test_functional_equalsFunctionAsync("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.equalsFunction(p),
  );
