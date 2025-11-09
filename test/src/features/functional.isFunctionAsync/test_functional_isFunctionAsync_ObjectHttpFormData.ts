import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_isFunctionAsync_ObjectHttpFormData = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.isFunction(p),
)