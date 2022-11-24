import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_object_closure = _test_assert(
    "closured object",
    ObjectClosure.generate,
    TSON.createAssert<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
