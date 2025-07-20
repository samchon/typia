import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_isFunctionAsync_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectUnionComposite")(
      ObjectUnionComposite,
    )((p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.isFunction(p),
    );
