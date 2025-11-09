import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_notation_createValidateCamel_ObjectUnionDouble = (): void =>
    _test_notation_validateGeneral("ObjectUnionDouble")<ObjectUnionDouble>(
        ObjectUnionDouble
  )<typia.CamelCase<ObjectUnionDouble>>({
    convert: typia.notations.createValidateCamel<ObjectUnionDouble>(),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionDouble>>(),
  });
