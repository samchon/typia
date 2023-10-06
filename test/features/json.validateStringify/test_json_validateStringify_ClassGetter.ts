import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_validateStringify_ClassGetter = _test_json_validateStringify(
    "ClassGetter",
)<ClassGetter>(
    ClassGetter
)((input) => typia.json.validateStringify<ClassGetter>(input));
