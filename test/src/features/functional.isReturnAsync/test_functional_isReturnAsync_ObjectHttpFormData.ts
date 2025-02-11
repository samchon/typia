import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_isReturnAsync_ObjectHttpFormData =
  _test_functional_isReturnAsync("ObjectHttpFormData")(ObjectHttpFormData)(
    (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
      typia.functional.isReturn(p),
  );
