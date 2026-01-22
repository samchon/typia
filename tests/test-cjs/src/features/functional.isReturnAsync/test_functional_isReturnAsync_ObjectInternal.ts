import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_isReturnAsync_ObjectInternal = (): Promise<void> =>
  _test_functional_isReturnAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      typia.functional.isReturn(p),
  );
