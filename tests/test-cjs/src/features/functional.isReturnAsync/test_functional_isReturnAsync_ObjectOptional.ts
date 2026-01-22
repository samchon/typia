import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_isReturnAsync_ObjectOptional = (): Promise<void> =>
  _test_functional_isReturnAsync("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.isReturn(p),
  );
