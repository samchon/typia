import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_createIsStringify_ObjectGenericAlias =
    _test_json_isStringify("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias,
    )(typia.json.createIsStringify<ObjectGenericAlias>());
