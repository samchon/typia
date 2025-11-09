import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_misc_isPrune_ObjectHttpUndefindable = (): void =>
  _test_misc_isPrune("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable,
  )((input) => typia.misc.isPrune<ObjectHttpUndefindable>(input));
