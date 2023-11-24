import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_createValidateCamel_ObjectGenericAlias =
  _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )<typia.CamelCase<ObjectGenericAlias>>({
    convert: typia.notations.createValidateCamel<ObjectGenericAlias>(),
    assert: typia.createAssert<typia.CamelCase<ObjectGenericAlias>>(),
  });
