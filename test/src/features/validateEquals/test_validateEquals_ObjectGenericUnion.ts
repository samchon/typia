import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_validateEquals_ObjectGenericUnion = (): void =>
  _test_validateEquals("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )((input) => typia.validateEquals<ObjectGenericUnion>(input));
