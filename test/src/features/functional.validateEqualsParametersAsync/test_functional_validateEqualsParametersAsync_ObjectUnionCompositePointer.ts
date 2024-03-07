import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateEqualsParametersAsync_ObjectUnionCompositePointer =
  _test_functional_validateEqualsParametersAsync("ObjectUnionCompositePointer")(
    ObjectUnionCompositePointer,
  )(
    (
      p: (
        input: ObjectUnionCompositePointer,
      ) => Promise<ObjectUnionCompositePointer>,
    ) => typia.functional.validateEqualsParameters(p),
  );
