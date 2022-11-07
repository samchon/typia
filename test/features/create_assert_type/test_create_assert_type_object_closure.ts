import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_closure = _test_assert_type(
    "closured object",
    ObjectClosure.generate,
    TSON.createAssertType<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
