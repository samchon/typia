import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_notation_validateCamel_ObjectTuple =
  _test_notation_validateGeneral("ObjectTuple")<ObjectTuple>(ObjectTuple)<
    typia.CamelCase<ObjectTuple>
  >({
    convert: (input) => typia.notations.validateCamel<ObjectTuple>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectTuple>>(),
  });
