import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_isStringify_ObjectAlias =
    _test_json_isStringify<ObjectAlias>(ObjectAlias)(
        typia.json.createIsStringify<ObjectAlias>(),
    );
