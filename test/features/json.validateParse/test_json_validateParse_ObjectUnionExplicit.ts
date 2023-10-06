import typia from "../../../src";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_validateParse_ObjectUnionExplicit = _test_json_validateParse(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)((input) => typia.json.validateParse<ObjectUnionExplicit>(input));
