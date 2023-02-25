import typia from "../../../src";

import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ObjectClosure = _test_assertEquals(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => typia.assertEquals(input),
);
