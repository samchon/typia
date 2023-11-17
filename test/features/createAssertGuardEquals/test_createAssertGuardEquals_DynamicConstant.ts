import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertGuardEquals_DynamicConstant =
  _test_assertGuardEquals("DynamicConstant")<DynamicConstant>(DynamicConstant)(
    typia.createAssertGuardEquals<DynamicConstant>(),
  );
