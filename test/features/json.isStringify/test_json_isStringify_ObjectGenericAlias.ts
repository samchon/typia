import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_isStringify_ObjectGenericAlias =
    _test_json_isStringify<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        typia.json.isStringify<ObjectGenericAlias>(input),
    );
