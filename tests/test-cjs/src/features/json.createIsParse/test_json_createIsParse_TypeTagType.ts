import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createIsParse_TypeTagType = (): void =>
  _test_json_isParse("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.json.createIsParse<TypeTagType>(),
  );
