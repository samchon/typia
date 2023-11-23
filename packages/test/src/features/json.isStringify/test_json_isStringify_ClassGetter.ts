import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_isStringify_ClassGetter = _test_json_isStringify(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input) =>
  typia.json.isStringify<ClassGetter>(input),
);
