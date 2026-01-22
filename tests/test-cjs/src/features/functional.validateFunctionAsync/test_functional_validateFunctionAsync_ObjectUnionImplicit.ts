import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateFunctionAsync_ObjectUnionImplicit =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectUnionImplicit")(
      ObjectUnionImplicit,
    )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.validateFunction(p),
    );
