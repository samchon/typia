import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_validate_ObjectGenericArray = (): void =>
  _test_validate("ObjectGenericArray")<ObjectGenericArray>(ObjectGenericArray)(
    (input) => typia.validate<ObjectGenericArray>(input),
  );
