import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_equalsFunctionAsync_ObjectHttpTypeTag =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectHttpTypeTag")(
      ObjectHttpTypeTag,
    )((p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.equalsFunction(p),
    );
