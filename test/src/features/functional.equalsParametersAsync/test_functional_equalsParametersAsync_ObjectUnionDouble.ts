import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_equalsParametersAsync_ObjectUnionDouble =
  _test_functional_equalsParametersAsync("ObjectUnionDouble")(
    ObjectUnionDouble,
  )((p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.equalsParameters(p),
  );
