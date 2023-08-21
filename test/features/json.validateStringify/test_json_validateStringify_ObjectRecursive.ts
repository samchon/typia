import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_json_validateStringify_ObjectRecursive =
    _test_json_validateStringify("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )((input) => typia.json.validateStringify<ObjectRecursive>(input));
