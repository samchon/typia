import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_isFunction_ObjectUnionComposite =
  _test_functional_isFunction("ObjectUnionComposite")(ObjectUnionComposite)(
    (p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
      typia.functional.isFunction(p),
  );
