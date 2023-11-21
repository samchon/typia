import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssertGuardEquals_TypeTagDefault =
  _test_assertGuardEquals("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.createAssertGuardEquals<TypeTagDefault>(),
  );
