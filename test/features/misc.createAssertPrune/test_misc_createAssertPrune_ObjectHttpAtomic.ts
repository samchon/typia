import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_misc_createAssertPrune_ObjectHttpAtomic =
  _test_misc_assertPrune("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )(typia.misc.createAssertPrune<ObjectHttpAtomic>());
