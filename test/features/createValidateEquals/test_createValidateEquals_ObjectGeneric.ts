import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectGeneric = _test_validateEquals(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createValidateEquals<ObjectGeneric>(),
);
