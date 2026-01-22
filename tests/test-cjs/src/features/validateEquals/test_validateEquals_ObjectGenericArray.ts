import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_validateEquals_ObjectGenericArray = (): void =>
  _test_validateEquals("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray,
  )((input) => typia.validateEquals<ObjectGenericArray>(input));
