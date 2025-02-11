import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_isReturnAsync_ObjectUnionComposite =
  _test_functional_isReturnAsync("ObjectUnionComposite")(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
      typia.functional.isReturn(p),
  );
