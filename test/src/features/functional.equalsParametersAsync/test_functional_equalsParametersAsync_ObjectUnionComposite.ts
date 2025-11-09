import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_equalsParametersAsync_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ObjectUnionComposite")(
      ObjectUnionComposite,
    )((p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.equalsParameters(p),
    );
