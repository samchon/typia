import typia from "typia";

import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectClosure = _test_is(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => typia.is(input),
    ObjectClosure.SPOILERS,
);
