import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_validateReturnAsync_ObjectLiteralProperty =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectLiteralProperty")(
      ObjectLiteralProperty,
    )((p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      typia.functional.validateReturn(p),
    );
