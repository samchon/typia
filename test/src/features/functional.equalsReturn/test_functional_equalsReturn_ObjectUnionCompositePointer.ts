import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_equalsReturn_ObjectUnionCompositePointer =
  _test_functional_equalsReturn("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )((p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
    typia.functional.equalsReturn(p),
  );
