import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_notation_createValidateCamel_ObjectPartialAndRequired =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectPartialAndRequired",
    )<ObjectPartialAndRequired>(ObjectPartialAndRequired)<
      typia.CamelCase<ObjectPartialAndRequired>
    >({
      convert: typia.notations.createValidateCamel<ObjectPartialAndRequired>(),
      assert: typia.createAssert<typia.CamelCase<ObjectPartialAndRequired>>(),
    });
