import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_notation_validateKebab_ObjectPartialAndRequired = (): void =>
  _test_notation_validateGeneral(
    "ObjectPartialAndRequired",
  )<ObjectPartialAndRequired>(ObjectPartialAndRequired)<
    typia.KebabCase<ObjectPartialAndRequired>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ObjectPartialAndRequired>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectPartialAndRequired>>(),
  });
