import typia from "../../../src";

import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectTuple = _test_validateEquals(
    "ObjectTuple",
    ObjectTuple.generate,
    typia.createValidateEquals<ObjectTuple>(),
);
