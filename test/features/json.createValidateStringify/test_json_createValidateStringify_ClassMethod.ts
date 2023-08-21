import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_validateStringify_ClassMethod =
    _test_json_validateStringify("ClassMethod")<ClassMethod>(ClassMethod)(
        typia.json.createValidateStringify<ClassMethod>(),
    );
