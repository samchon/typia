import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateFunction_ObjectUnionCompositePointer =
  _test_functional_validateFunction("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )((p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
    typia.functional.validateFunction(p),
  );
