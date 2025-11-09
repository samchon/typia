import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateParametersAsync_ObjectUnionComposite =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectUnionComposite")(
      ObjectUnionComposite,
    )((p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.validateParameters(p),
    );
