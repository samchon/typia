import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_equalsFunctionAsync_ObjectUnionImplicit =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectUnionImplicit")(
      ObjectUnionImplicit,
    )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
      typia.functional.equalsFunction(p),
    );
