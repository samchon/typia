import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_isParse_TypeTagCustom = _test_json_isParse(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.json.isParse<TypeTagCustom>(input),
);
