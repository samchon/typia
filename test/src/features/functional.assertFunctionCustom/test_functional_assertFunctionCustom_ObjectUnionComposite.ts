import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertFunctionCustom_ObjectUnionComposite =
  _test_functional_assertFunction(CustomGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
