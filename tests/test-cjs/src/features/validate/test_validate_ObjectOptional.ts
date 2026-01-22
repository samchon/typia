import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_validate_ObjectOptional = (): void =>
  _test_validate("ObjectOptional")<ObjectOptional>(ObjectOptional)((input) =>
    typia.validate<ObjectOptional>(input),
  );
