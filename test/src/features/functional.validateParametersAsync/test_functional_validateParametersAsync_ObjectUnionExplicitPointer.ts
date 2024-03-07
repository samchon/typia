import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateParametersAsync_ObjectUnionExplicitPointer =
  _test_functional_validateParametersAsync("ObjectUnionExplicitPointer")(
    ObjectUnionExplicitPointer,
  )(
    (
      p: (
        input: ObjectUnionExplicitPointer,
      ) => Promise<ObjectUnionExplicitPointer>,
    ) => typia.functional.validateParameters(p),
  );
