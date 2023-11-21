import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_notation_validatePascal_NativeAlias =
  _test_notation_validateGeneral("NativeAlias")<NativeAlias>(NativeAlias)<
    typia.PascalCase<NativeAlias>
  >({
    convert: (input) => typia.notations.validatePascal<NativeAlias>(input),
    assert: typia.createAssert<typia.PascalCase<NativeAlias>>(),
  });
