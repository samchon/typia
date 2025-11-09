import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_isParse_ClassGetter = (): void => _test_json_isParse(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.json.isParse<ClassGetter>(input));
