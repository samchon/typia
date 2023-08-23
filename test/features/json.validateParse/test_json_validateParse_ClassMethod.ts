import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_validateParse_ClassMethod = _test_json_validateParse(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
    typia.json.validateParse<ClassMethod>(input),
);
