import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_equalsFunctionAsync_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectUnionComposite")(
      ObjectUnionComposite,
    )((p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.equalsFunction(p),
    );
