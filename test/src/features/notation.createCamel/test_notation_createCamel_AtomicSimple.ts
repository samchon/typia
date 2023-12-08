import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_notation_createValidateCamel_AtomicSimple =
  _test_notation_validateGeneral("AtomicSimple")<AtomicSimple>(AtomicSimple)<
    typia.CamelCase<AtomicSimple>
  >({
    convert: typia.notations.createValidateCamel<AtomicSimple>(),
    assert: typia.createAssert<typia.CamelCase<AtomicSimple>>(),
  });
