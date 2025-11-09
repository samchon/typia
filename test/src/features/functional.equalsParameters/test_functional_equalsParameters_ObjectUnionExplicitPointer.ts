import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_equalsParameters_ObjectUnionExplicitPointer =
  (): void =>
    _test_functional_equalsParameters("ObjectUnionExplicitPointer")(
      ObjectUnionExplicitPointer,
    )((p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) =>
      typia.functional.equalsParameters(p),
    );
