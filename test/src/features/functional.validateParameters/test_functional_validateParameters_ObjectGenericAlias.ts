import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateParameters_ObjectGenericAlias = (): void =>
  _test_functional_validateParameters("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      typia.functional.validateParameters(p),
  );
