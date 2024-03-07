import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_validateParametersAsync_ObjectGenericAlias =
  _test_functional_validateParametersAsync("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.validateParameters(p),
  );
