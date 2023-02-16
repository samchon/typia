import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectUnionDouble = _test_validateParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) => typia.validateParse<ObjectUnionDouble>(input),
    ObjectUnionDouble.SPOILERS,
);
