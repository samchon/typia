import typia from "typia";

import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ObjectClosure = _test_assertEquals(
    "ObjectClosure",
    ObjectClosure.generate,
    typia.createAssertEquals<ObjectClosure>(),
);
