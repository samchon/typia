import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateParametersAsync_ObjectUnionCompositePointer =
  _test_functional_validateParametersAsync("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )(
    (
      p: (
        input: ObjectUnionCompositePointer,
      ) => Promise<ObjectUnionCompositePointer>,
    ) => typia.functional.validateParameters(p),
  );
