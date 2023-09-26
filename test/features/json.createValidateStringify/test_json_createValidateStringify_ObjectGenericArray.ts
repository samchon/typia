import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createValidateStringify_ObjectGenericArray =
    _test_json_validateStringify("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )(typia.json.createValidateStringify<ObjectGenericArray>());
