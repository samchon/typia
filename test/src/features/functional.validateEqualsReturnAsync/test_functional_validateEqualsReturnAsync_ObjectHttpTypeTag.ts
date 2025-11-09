import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_validateEqualsReturnAsync_ObjectHttpTypeTag = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectHttpTypeTag"
)(ObjectHttpTypeTag)(
  (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
    typia.functional.validateEqualsReturn(p),
)