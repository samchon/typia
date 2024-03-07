import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateParametersAsync_ObjectUnionImplicit =
  _test_functional_validateParametersAsync("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
    typia.functional.validateParameters(p),
  );
