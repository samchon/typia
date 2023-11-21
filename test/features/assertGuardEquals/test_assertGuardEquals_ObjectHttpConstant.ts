import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertGuardEquals_ObjectHttpConstant =
  _test_assertGuardEquals("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )((input) => typia.assertGuardEquals<ObjectHttpConstant>(input));
