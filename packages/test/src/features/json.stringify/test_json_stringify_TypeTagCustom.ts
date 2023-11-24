import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_stringify_TypeTagCustom = _test_json_stringify(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.json.stringify<TypeTagCustom>(input),
);
