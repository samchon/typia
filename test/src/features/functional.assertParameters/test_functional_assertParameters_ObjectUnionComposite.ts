import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertParameters_ObjectUnionComposite = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertParameters(p),
  );
