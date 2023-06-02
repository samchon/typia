import typia from "../../../src";

import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ObjectIntersection = _test_validateParse(
    "ObjectIntersection",
    ObjectIntersection.generate,
    (input) => typia.validateParse<ObjectIntersection>(input),
    ObjectIntersection.SPOILERS,
);
