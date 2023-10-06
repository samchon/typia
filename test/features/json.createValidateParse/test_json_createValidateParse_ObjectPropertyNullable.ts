import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createValidateParse_ObjectPropertyNullable = _test_json_validateParse(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.json.createValidateParse<ObjectPropertyNullable>());
