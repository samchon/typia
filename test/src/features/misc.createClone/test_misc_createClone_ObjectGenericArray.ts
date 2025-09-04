import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_misc_createClone_ObjectGenericArray = (): void =>
  _test_misc_clone("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )(typia.misc.createClone<ObjectGenericArray>());
