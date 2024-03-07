import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ObjectUnionComposite =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertEqualsFunction(p),
  );
