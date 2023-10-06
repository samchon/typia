import typia from "../../../src";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_createStringify_ObjectGenericUnion = _test_json_stringify(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(
    ObjectGenericUnion
)(typia.json.createStringify<ObjectGenericUnion>());
