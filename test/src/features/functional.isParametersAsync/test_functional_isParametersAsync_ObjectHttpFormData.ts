import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_isParametersAsync_ObjectHttpFormData = _test_functional_isParametersAsync(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.isParameters(p),
)