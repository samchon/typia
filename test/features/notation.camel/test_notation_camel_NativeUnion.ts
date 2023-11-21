import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_notation_validateCamel_NativeUnion =
  _test_notation_validateGeneral("NativeUnion")<NativeUnion>(NativeUnion)<
    typia.CamelCase<NativeUnion>
  >({
    convert: (input) => typia.notations.validateCamel<NativeUnion>(input),
    assert: typia.createAssert<typia.CamelCase<NativeUnion>>(),
  });
