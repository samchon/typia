import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_functional_equalsReturnAsync_ObjectUnionExplicit =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectUnionExplicit")(
      ObjectUnionExplicit,
    )((p: (input: ObjectUnionExplicit) => Promise<ObjectUnionExplicit>) =>
      typia.functional.equalsReturn(p),
    );
