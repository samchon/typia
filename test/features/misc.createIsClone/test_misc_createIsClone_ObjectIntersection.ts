import typia from "../../../src";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_misc_createIsClone_ObjectIntersection = _test_misc_isClone(
    "ObjectIntersection",
)<ObjectIntersection>(
    ObjectIntersection
)(typia.misc.createIsClone<ObjectIntersection>());
