import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_isReturnAsync_ObjectHttpConstant = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.isReturn(p),
)