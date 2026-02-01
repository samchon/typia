import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_validateParametersAsync_ObjectAlias = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.validateParameters(p),
)