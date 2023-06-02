import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_TupleRestObject = _test_validateParse(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.validateParse<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);
