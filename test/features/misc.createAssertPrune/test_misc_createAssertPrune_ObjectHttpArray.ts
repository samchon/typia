import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_misc_createAssertPrune_ObjectHttpArray =
  _test_misc_assertPrune("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
    typia.misc.createAssertPrune<ObjectHttpArray>(),
  );
