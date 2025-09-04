import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_equalsParameters_ObjectRequired = (): void =>
  _test_functional_equalsParameters("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => ObjectRequired) =>
      typia.functional.equalsParameters(p),
  );
