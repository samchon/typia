import typia from "typia";

import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ObjectClosure = _test_validateEquals(
    "ObjectClosure",
    ObjectClosure.generate,
    typia.createValidateEquals<ObjectClosure>(),
);
