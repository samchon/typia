import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_assertParse_ClassMethod = _test_json_assertParse(
    "ClassMethod",
)<ClassMethod>(ClassMethod)((input) =>
    typia.json.assertParse<ClassMethod>(input),
);
