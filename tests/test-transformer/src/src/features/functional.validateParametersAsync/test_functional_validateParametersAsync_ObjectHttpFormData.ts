import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_functional_validateParametersAsync_ObjectHttpFormData = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectHttpFormData"
)(ObjectHttpFormData)(
  (p: (input: ObjectHttpFormData) => Promise<ObjectHttpFormData>) =>
    typia.functional.validateParameters(p),
)