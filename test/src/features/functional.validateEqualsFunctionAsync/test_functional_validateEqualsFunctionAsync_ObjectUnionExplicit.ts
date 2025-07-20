import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_validateEqualsFunctionAsync_ObjectUnionExplicit =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectUnionExplicit")(
      ObjectUnionExplicit,
    )((p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
      typia.functional.validateEqualsFunction(p),
    );
