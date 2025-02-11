import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_equalsParameters_ObjectUnionCompositePointer =
  _test_functional_equalsParameters("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )((p: (input: ObjectUnionCompositePointer) => ObjectUnionCompositePointer) =>
    typia.functional.equalsParameters(p),
  );
