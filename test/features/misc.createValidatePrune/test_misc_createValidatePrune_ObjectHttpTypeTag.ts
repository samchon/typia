import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_misc_createValidatePrune_ObjectHttpTypeTag =
  _test_misc_validatePrune("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )(typia.misc.createValidatePrune<ObjectHttpTypeTag>());
