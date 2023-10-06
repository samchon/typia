import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_createValidateParse_ClassGetter = _test_json_validateParse(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)(typia.json.createValidateParse<ClassGetter>());
