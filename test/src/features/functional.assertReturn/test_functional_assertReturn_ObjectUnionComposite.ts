import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_assertReturn_ObjectUnionComposite = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectUnionComposite")(
    ObjectUnionComposite,
  )((p: (input: ObjectUnionComposite) => ObjectUnionComposite) =>
    typia.functional.assertReturn(p),
  );
