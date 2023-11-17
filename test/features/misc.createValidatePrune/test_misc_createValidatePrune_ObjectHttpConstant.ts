import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_misc_createValidatePrune_ObjectHttpConstant =
  _test_misc_validatePrune("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )(typia.misc.createValidatePrune<ObjectHttpConstant>());
