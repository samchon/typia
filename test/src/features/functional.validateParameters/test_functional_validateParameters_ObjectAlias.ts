import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateParameters_ObjectAlias =
  _test_functional_validateParameters("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      typia.functional.validateParameters(p),
  );
