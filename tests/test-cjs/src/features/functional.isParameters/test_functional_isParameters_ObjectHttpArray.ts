import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_isParameters_ObjectHttpArray = (): void =>
  _test_functional_isParameters("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.isParameters(p),
  );
