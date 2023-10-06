import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_json_createValidateParse_ObjectAlias = _test_json_validateParse(
    "ObjectAlias",
)<ObjectAlias>(
    ObjectAlias
)(typia.json.createValidateParse<ObjectAlias>());
