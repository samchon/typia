import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_equalsFunction_ObjectUnionExplicitPointer =
  (): void =>
    _test_functional_equalsFunction("ObjectUnionExplicitPointer")(
      ObjectUnionExplicitPointer,
    )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.equalsFunction(p),
    );
