import typia from "../../../src";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectUndefined = _test_validate(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createValidate<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
