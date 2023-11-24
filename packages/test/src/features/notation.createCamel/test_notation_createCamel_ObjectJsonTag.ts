import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_createValidateCamel_ObjectJsonTag =
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.CamelCase<ObjectJsonTag>
  >({
    convert: typia.notations.createValidateCamel<ObjectJsonTag>(),
    assert: typia.createAssert<typia.CamelCase<ObjectJsonTag>>(),
  });
