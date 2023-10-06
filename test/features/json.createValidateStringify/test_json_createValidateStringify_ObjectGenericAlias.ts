import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_createValidateStringify_ObjectGenericAlias = _test_json_validateStringify(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)(typia.json.createValidateStringify<ObjectGenericAlias>());
