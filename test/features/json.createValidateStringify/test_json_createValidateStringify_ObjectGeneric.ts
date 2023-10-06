import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_createValidateStringify_ObjectGeneric = _test_json_validateStringify(
    "ObjectGeneric",
)<ObjectGeneric>(
    ObjectGeneric
)(typia.json.createValidateStringify<ObjectGeneric>());
