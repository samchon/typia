import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_equalsParameters_ObjectHttpArray = (): void =>
  _test_functional_equalsParameters("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.equalsParameters(p),
  );
