import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetUnion } from "../../structures/SetUnion";

export const test_notation_createValidatePascal_SetUnion =
  _test_notation_validateGeneral("SetUnion")<SetUnion>(SetUnion)<
    typia.PascalCase<SetUnion>
  >({
    convert: typia.notations.createValidatePascal<SetUnion>(),
    assert: typia.createAssert<typia.PascalCase<SetUnion>>(),
  });
