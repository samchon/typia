import typia from "../../../src";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_createAssertParse_ObjectGenericArray = _test_json_assertParse(
    "ObjectGenericArray",
)<ObjectGenericArray>(
    ObjectGenericArray
)(typia.json.createAssertParse<ObjectGenericArray>());
