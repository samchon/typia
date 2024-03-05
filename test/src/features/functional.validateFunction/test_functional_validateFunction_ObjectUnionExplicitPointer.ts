import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateFunction_ObjectUnionExplicitPointer =
  _test_functional_validateFunction("ObjectUnionExplicitPointer")(
    ObjectUnionExplicitPointer,
  )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
    typia.functional.validateFunction(p),
  );
