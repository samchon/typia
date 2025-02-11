import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_isParameters_ObjectDescription =
  _test_functional_isParameters("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.isParameters(p),
  );
