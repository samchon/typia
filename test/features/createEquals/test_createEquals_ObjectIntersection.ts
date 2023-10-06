import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_createEquals_ObjectIntersection = _test_equals(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.createEquals<ObjectIntersection>());
