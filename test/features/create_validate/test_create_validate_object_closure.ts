import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_closure = _test_validate(
    "closured object",
    ObjectClosure.generate,
    TSON.createValidate<ObjectClosure>(),
    ObjectClosure.SPOILERS,
);
