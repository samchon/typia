import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_notation_createValidatePascal_DynamicTree =
  _test_notation_validateGeneral("DynamicTree")<DynamicTree>(DynamicTree)<
    typia.PascalCase<DynamicTree>
  >({
    convert: typia.notations.createValidatePascal<DynamicTree>(),
    assert: typia.createAssert<typia.PascalCase<DynamicTree>>(),
  });
