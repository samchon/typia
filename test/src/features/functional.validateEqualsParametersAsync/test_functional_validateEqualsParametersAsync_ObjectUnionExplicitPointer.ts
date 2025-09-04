import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateEqualsParametersAsync_ObjectUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync(
      "ObjectUnionExplicitPointer",
    )(ObjectUnionExplicitPointer)(
      (
        p: (
          input: ObjectUnionExplicitPointer,
        ) => Promise<ObjectUnionExplicitPointer>,
      ) => typia.functional.validateEqualsParameters(p),
    );
