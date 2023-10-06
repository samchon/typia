import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_createValidateParse_ObjectPartial = _test_json_validateParse(
    "ObjectPartial",
)<ObjectPartial>(
    ObjectPartial
)(typia.json.createValidateParse<ObjectPartial>());
