import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_equalsReturnAsync_ObjectClosure =
  _test_functional_equalsReturnAsync("ObjectClosure")(ObjectClosure)(
    (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
      typia.functional.equalsReturn(p),
  );
