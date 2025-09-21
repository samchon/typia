import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_createValidateKebab_ObjectGenericAlias = (): void =>
  _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )<typia.KebabCase<ObjectGenericAlias>>({
    convert: typia.notations.createValidateKebab<ObjectGenericAlias>(),
    assert: typia.createAssert<typia.KebabCase<ObjectGenericAlias>>(),
  });
