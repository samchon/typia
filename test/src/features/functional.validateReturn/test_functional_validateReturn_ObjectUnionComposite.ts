import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateReturn_ObjectUnionComposite =
  _test_functional_validateReturn("ObjectUnionComposite")(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
      typia.functional.validateReturn(p),
  );
