import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_notation_createValidatePascal_ObjectPartialAndRequired =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)<
      typia.PascalCase<ObjectPartialAndRequired>
    >({
      convert: typia.notations.createValidatePascal<ObjectPartialAndRequired>(),
      assert: typia.createAssert<typia.PascalCase<ObjectPartialAndRequired>>(),
    });
