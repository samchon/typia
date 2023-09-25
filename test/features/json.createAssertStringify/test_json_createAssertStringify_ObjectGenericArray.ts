import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createAssertStringify_ObjectGenericArray =
    _test_json_assertStringify("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )(typia.json.createAssertStringify<ObjectGenericArray>());
