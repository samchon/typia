import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_assertParse_ClassGetter = _test_json_assertParse(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.json.assertParse<ClassGetter>(input));
