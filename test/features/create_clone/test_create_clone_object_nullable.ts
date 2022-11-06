import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_nullable = _test_clone(
    "nullable object",
    ObjectNullable.generate,
    TSON.createClone<ObjectNullable>(),
);
