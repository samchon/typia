import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_notation_createValidateKebab_ObjectAlias = (): void =>
  _test_notation_validateGeneral("ObjectAlias")<ObjectAlias>(ObjectAlias)<
    typia.KebabCase<ObjectAlias>
  >({
    convert: typia.notations.createValidateKebab<ObjectAlias>(),
    assert: typia.createAssert<typia.KebabCase<ObjectAlias>>(),
  });
