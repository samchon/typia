import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ObjectAlias = (): Promise<void> => _test_functional_assertReturnAsync(TypeGuardError)(
  "ObjectAlias"
)(ObjectAlias)(
  (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertReturn(p),
)