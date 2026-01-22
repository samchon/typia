import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_equalsParameters_ObjectDescription = (): void =>
  _test_functional_equalsParameters("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.equalsParameters(p),
  );
