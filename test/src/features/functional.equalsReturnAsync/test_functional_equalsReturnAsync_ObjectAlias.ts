import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_equalsReturnAsync_ObjectAlias = _test_functional_equalsReturnAsync(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.equalsReturn(p),
)