import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_notation_validateKebab_ConstantConstEnumeration = (): void =>
  _test_notation_validateGeneral(
    "ConstantConstEnumeration",
  )<ConstantConstEnumeration>(ConstantConstEnumeration)<
    typia.KebabCase<ConstantConstEnumeration>
  >({
    convert: (input) =>
      typia.notations.validateKebab<ConstantConstEnumeration>(input),
    assert: typia.createAssert<typia.KebabCase<ConstantConstEnumeration>>(),
  });
