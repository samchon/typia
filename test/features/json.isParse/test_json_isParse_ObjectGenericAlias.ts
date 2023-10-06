import typia from "../../../src";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_isParse_ObjectGenericAlias = _test_json_isParse(
    "ObjectGenericAlias",
)<ObjectGenericAlias>(
    ObjectGenericAlias
)((input) => typia.json.isParse<ObjectGenericAlias>(input));
