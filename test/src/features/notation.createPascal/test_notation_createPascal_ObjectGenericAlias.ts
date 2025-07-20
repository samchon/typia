import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_createValidatePascal_ObjectGenericAlias = (): void =>
  _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )<typia.PascalCase<ObjectGenericAlias>>({
    convert: typia.notations.createValidatePascal<ObjectGenericAlias>(),
    assert: typia.createAssert<typia.PascalCase<ObjectGenericAlias>>(),
  });
