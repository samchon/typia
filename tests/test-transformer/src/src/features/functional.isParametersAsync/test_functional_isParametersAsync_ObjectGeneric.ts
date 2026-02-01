import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_isParametersAsync_ObjectGeneric = (): Promise<void> => _test_functional_isParametersAsync(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.isParameters(p),
)