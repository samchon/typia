import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_createAssertPrune_ObjectUnionImplicit =
  _test_misc_assertPrune("ObjectUnionImplicit")<ObjectUnionImplicit>(
    ObjectUnionImplicit,
  )(typia.misc.createAssertPrune<ObjectUnionImplicit>());
