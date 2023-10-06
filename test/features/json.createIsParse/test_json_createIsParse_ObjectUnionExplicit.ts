import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_createIsParse_ObjectUnionExplicit = _test_json_isParse(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)(typia.json.createIsParse<ObjectUnionExplicit>());
