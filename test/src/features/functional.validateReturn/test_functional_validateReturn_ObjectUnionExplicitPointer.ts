import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateReturn_ObjectUnionExplicitPointer =
  _test_functional_validateReturn("ObjectUnionExplicitPointer")(
    ObjectUnionExplicitPointer,
  )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
    typia.functional.validateReturn(p),
  );
