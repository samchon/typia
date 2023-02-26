import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_assert_ObjectClosure = _test_assert(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => typia.assert(input),
    ObjectClosure.SPOILERS,
);
