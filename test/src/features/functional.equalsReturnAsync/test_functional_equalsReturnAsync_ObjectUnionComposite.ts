import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_equalsReturnAsync_ObjectUnionComposite =
  _test_functional_equalsReturnAsync("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
    typia.functional.equalsReturn(p),
  );
