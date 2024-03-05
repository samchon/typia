import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateReturn_ObjectUnionCompositePointer =
  _test_functional_validateReturn("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )((p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
    typia.functional.validateReturn(p),
  );
