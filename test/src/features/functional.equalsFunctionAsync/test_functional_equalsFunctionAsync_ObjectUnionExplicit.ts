import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_equalsFunctionAsync_ObjectUnionExplicit = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ObjectUnionExplicit"
)(ObjectUnionExplicit)(
  (p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
    typia.functional.equalsFunction(p),
)