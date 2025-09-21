import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_notation_validateKebab_ConstantEnumeration = (): void =>
  _test_notation_validateGeneral("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )<typia.KebabCase<ConstantEnumeration>>({
    convert: (input) =>
      typia.notations.validateKebab<ConstantEnumeration>(input),
    assert: typia.createAssert<typia.KebabCase<ConstantEnumeration>>(),
  });
