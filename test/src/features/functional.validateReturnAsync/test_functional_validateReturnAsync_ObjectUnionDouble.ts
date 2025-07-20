import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateReturnAsync_ObjectUnionDouble =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectUnionDouble")(
      ObjectUnionDouble,
    )((p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
      typia.functional.validateReturn(p),
    );
