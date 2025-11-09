import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_misc_clone_ObjectGenericUnion = (): void =>
  _test_misc_clone("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )((input) => typia.misc.clone<ObjectGenericUnion>(input));
