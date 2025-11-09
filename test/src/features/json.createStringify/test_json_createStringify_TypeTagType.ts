import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_json_createStringify_TypeTagType = (): void =>
  _test_json_stringify("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.json.createStringify<TypeTagType>(),
  );
