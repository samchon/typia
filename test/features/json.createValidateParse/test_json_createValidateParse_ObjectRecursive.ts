import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_createValidateParse_ObjectRecursive =
    _test_json_validateParse("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )(typia.json.createValidateParse<ObjectRecursive>());
