import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateEqualsReturn_ObjectUnionExplicitPointer =
  (): void =>
    _test_functional_validateEqualsReturn("ObjectUnionExplicitPointer")(
      ObjectUnionExplicitPointer,
    )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.validateEqualsReturn(p),
    );
