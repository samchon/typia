import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateEqualsParametersAsync_ObjectUnionImplicit =
  _test_functional_validateEqualsParametersAsync("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
    typia.functional.validateEqualsParameters(p),
  );
