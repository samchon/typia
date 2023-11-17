import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_notation_createValidatePascal_DynamicTag =
  _test_notation_validateGeneral("DynamicTag")<DynamicTag>(DynamicTag)<
    typia.PascalCase<DynamicTag>
  >({
    convert: typia.notations.createValidatePascal<DynamicTag>(),
    assert: typia.createAssert<typia.PascalCase<DynamicTag>>(),
  });
