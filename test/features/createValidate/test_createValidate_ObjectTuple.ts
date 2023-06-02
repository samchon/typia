import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_ObjectTuple = _test_validate(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createValidate<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
