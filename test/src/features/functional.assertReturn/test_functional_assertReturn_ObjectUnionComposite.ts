import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectUnionComposite =
  _test_functional_assertReturn(TypeGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertReturn(p),
  );
