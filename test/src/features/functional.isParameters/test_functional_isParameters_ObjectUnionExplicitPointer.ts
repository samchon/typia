import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_isParameters_ObjectUnionExplicitPointer =
  (): void =>
    _test_functional_isParameters("ObjectUnionExplicitPointer")(
      ObjectUnionExplicitPointer,
    )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.isParameters(p),
    );
