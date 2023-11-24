import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_notation_createValidateCamel_DynamicTag =
  _test_notation_validateGeneral("DynamicTag")<DynamicTag>(DynamicTag)<
    typia.CamelCase<DynamicTag>
  >({
    convert: typia.notations.createValidateCamel<DynamicTag>(),
    assert: typia.createAssert<typia.CamelCase<DynamicTag>>(),
  });
