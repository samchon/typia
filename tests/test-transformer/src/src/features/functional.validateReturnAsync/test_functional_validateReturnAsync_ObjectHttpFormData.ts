import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_validateReturnAsync_ObjectHttpFormData = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.validateReturn(p),
)