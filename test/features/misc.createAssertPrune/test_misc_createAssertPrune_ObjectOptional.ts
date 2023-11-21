import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_createAssertPrune_ObjectOptional =
  _test_misc_assertPrune("ObjectOptional")<ObjectOptional>(ObjectOptional)(
    typia.misc.createAssertPrune<ObjectOptional>(),
  );
