import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectUnionComposite =
  _test_functional_assertParameters(TypeGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertParameters(p),
  );
