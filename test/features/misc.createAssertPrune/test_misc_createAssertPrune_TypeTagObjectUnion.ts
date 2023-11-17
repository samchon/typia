import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_misc_createAssertPrune_TypeTagObjectUnion =
  _test_misc_assertPrune("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.misc.createAssertPrune<TypeTagObjectUnion>());
