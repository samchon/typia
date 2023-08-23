import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_isParse_ClassMethod = _test_json_isParse(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input) => typia.json.isParse<ClassMethod>(input));
