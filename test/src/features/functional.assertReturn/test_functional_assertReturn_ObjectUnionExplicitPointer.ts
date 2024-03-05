import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_assertReturn_ObjectUnionExplicitPointer =
  _test_functional_assertReturn(TypeGuardError)("ObjectUnionExplicitPointer")(
    ObjectUnionExplicitPointer,
  )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
    typia.functional.assertReturn(p),
  );
