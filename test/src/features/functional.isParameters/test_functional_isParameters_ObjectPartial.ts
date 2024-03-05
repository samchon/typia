import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_isParameters_ObjectPartial =
  _test_functional_isParameters("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.isParameters(p),
  );
