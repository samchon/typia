import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_equalsFunction_ObjectUnionCompositePointer =
  (): void =>
    _test_functional_equalsFunction("ObjectUnionCompositePointer")(
      ObjectUnionCompositePointer,
    )(
      (
        p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer,
      ) => typia.functional.equalsFunction(p),
    );
