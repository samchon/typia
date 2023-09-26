import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_createValidateStringify_ObjectNullable =
    _test_json_validateStringify("ObjectNullable")<ObjectNullable>(
        ObjectNullable,
    )(typia.json.createValidateStringify<ObjectNullable>());
