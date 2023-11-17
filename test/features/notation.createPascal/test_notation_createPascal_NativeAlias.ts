import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_notation_createValidatePascal_NativeAlias =
  _test_notation_validateGeneral("NativeAlias")<NativeAlias>(NativeAlias)<
    typia.PascalCase<NativeAlias>
  >({
    convert: typia.notations.createValidatePascal<NativeAlias>(),
    assert: typia.createAssert<typia.PascalCase<NativeAlias>>(),
  });
