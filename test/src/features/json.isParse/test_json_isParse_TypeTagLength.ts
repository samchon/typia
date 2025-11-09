import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_json_isParse_TypeTagLength = (): void =>
  _test_json_isParse("TypeTagLength")<TypeTagLength>(TypeTagLength)((input) =>
    typia.json.isParse<TypeTagLength>(input),
  );
