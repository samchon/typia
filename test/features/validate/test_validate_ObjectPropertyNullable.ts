import typia from "../../../src";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_ObjectPropertyNullable = _test_validate(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => typia.validate(input),
    ObjectPropertyNullable.SPOILERS,
);
