import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_equalsParameters_ObjectPartialAndRequired =
  (): void =>
    _test_functional_equalsParameters("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )((p: (input: ObjectPartialAndRequired) => ObjectPartialAndRequired) =>
      typia.functional.equalsParameters(p),
    );
