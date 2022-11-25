import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectClosure = _test_assert(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.assert(input),
    ObjectClosure.SPOILERS,
);
