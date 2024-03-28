import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertFunction_ObjectUnionComposite =
  _test_functional_assertFunction(TypeGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertFunction(p),
  );
