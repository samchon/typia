import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectTuple = _test_validateParse(
    "ObjectTuple",
    ObjectTuple.generate,
    (input) => typia.validateParse<ObjectTuple>(input),
    ObjectTuple.SPOILERS,
);
