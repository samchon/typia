import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectUndefined = _test_validate(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => typia.validate(input),
    ObjectUndefined.SPOILERS,
);
