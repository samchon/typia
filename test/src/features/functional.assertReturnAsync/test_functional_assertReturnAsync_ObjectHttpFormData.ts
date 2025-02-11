import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_assertReturnAsync_ObjectHttpFormData =
  _test_functional_assertReturnAsync(TypeGuardError)("ObjectHttpFormData")(
    ObjectHttpFormData,
  )((p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.assertReturn(p),
  );
