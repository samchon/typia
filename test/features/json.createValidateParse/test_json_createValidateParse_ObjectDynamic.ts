import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_json_createValidateParse_ObjectDynamic = _test_json_validateParse(
    "ObjectDynamic",
)<ObjectDynamic>(
    ObjectDynamic
)(typia.json.createValidateParse<ObjectDynamic>());
