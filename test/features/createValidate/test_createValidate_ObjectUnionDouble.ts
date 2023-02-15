import typia from "typia";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectUnionDouble = _test_validate(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidate<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
