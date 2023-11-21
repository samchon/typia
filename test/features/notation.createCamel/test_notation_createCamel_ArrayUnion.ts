import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_notation_createValidateCamel_ArrayUnion =
  _test_notation_validateGeneral("ArrayUnion")<ArrayUnion>(ArrayUnion)<
    typia.CamelCase<ArrayUnion>
  >({
    convert: typia.notations.createValidateCamel<ArrayUnion>(),
    assert: typia.createAssert<typia.CamelCase<ArrayUnion>>(),
  });
