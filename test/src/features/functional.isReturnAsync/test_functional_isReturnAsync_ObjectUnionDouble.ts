import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_isReturnAsync_ObjectUnionDouble =
  _test_functional_isReturnAsync("ObjectUnionDouble")(ObjectUnionDouble)(
    (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
      typia.functional.isReturn(p),
  );
