import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_createAssertParse_ClassGetter = _test_json_assertParse(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.json.createAssertParse<ClassGetter>());
