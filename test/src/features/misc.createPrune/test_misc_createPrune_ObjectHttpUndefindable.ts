import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_misc_createPrune_ObjectHttpUndefindable = (): void =>
  _test_misc_prune("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )(typia.misc.createPrune<ObjectHttpUndefindable>());
