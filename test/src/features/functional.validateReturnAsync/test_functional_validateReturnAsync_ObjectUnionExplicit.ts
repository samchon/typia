import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_validateReturnAsync_ObjectUnionExplicit = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectUnionExplicit"
)(ObjectUnionExplicit)(
  (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
    typia.functional.validateReturn(p),
)