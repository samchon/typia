import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_functional_validateReturnAsync_ObjectUnionImplicit =
  _test_functional_validateReturnAsync("ObjectUnionImplicit")(
    ObjectUnionImplicit,
  )((p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
    typia.functional.validateReturn(p),
  );
