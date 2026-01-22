import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_isParametersAsync_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectUnionComposite")(
      ObjectUnionComposite,
    )((p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.isParameters(p),
    );
