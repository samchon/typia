import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_validateKebab_ObjectRequired = (): void =>
  _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )<typia.KebabCase<ObjectRequired>>({
    convert: (input) => typia.notations.validateKebab<ObjectRequired>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectRequired>>(),
  });
