import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_notation_validateKebab_ObjectOptional = (): void =>
  _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )<typia.KebabCase<ObjectOptional>>({
    convert: (input) => typia.notations.validateKebab<ObjectOptional>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectOptional>>(),
  });
