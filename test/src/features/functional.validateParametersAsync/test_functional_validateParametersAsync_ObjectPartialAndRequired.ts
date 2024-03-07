import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateParametersAsync_ObjectPartialAndRequired =
  _test_functional_validateParametersAsync("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )(
    (
      p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>,
    ) => typia.functional.validateParameters(p),
  );
