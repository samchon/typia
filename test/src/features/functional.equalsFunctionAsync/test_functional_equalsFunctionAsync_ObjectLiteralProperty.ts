import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_equalsFunctionAsync_ObjectLiteralProperty =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectLiteralProperty")(
      ObjectLiteralProperty,
    )((p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      typia.functional.equalsFunction(p),
    );
