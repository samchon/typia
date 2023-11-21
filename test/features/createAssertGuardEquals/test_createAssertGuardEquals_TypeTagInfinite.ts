import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertGuardEquals_TypeTagInfinite =
  _test_assertGuardEquals("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)(
    typia.createAssertGuardEquals<TypeTagInfinite>(),
  );
