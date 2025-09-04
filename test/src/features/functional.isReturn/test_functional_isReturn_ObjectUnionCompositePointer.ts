import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_isReturn_ObjectUnionCompositePointer = (): void =>
  _test_functional_isReturn("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )((p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
    typia.functional.isReturn(p),
  );
