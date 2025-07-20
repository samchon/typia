import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateEqualsParametersAsync_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.validateEqualsParameters(p),
    );
