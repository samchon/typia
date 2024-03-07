import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ObjectUnionExplicitPointer =
  _test_functional_assertReturn(TypeGuardError)("ObjectUnionExplicitPointer")(
    ObjectUnionExplicitPointer,
  )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
    typia.functional.assertReturn(p),
  );
