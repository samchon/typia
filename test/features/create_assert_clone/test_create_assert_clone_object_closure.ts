import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_closure = _test_assert_clone(
    "closured object",
    ObjectClosure.generate,
    TSON.createAssertClone<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
