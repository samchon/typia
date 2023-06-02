import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ObjectInternal = _test_validate(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.validate(input),
    ObjectInternal.SPOILERS,
);
