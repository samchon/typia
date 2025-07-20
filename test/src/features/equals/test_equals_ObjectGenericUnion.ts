import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_equals_ObjectGenericUnion = (): void =>
  _test_equals("ObjectGenericUnion")<ObjectGenericUnion>(ObjectGenericUnion)(
    (input) => typia.equals<ObjectGenericUnion>(input),
  );
