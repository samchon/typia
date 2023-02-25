import typia from "../../../src";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectPropertyNullable = _test_validateEquals(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    typia.createValidateEquals<ObjectPropertyNullable>(),
);
