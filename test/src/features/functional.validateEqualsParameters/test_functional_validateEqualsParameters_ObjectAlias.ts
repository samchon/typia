import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateEqualsParameters_ObjectAlias =
  _test_functional_validateEqualsParameters("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.validateEqualsParameters(p),
  );
