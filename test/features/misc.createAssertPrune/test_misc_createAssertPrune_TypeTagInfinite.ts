import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_misc_createAssertPrune_TypeTagInfinite =
  _test_misc_assertPrune("TypeTagInfinite")<TypeTagInfinite>(TypeTagInfinite)(
    typia.misc.createAssertPrune<TypeTagInfinite>(),
  );
