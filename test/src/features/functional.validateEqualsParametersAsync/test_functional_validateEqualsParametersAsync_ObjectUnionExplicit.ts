import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_validateEqualsParametersAsync_ObjectUnionExplicit =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectUnionExplicit")(
      ObjectUnionExplicit,
    )((p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
      typia.functional.validateEqualsParameters(p),
    );
