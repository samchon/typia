import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_json_createIsParse_TypeTagDefault = (): void =>
  _test_json_isParse("TypeTagDefault")<TypeTagDefault>(TypeTagDefault)(
    typia.json.createIsParse<TypeTagDefault>(),
  );
