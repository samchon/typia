import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_functional_equalsFunctionAsync_ObjectJsonTag =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectJsonTag")(ObjectJsonTag)(
      (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
        typia.functional.equalsFunction(p),
    );
