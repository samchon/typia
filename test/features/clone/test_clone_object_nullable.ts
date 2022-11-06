import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_clone } from "./_test_clone";

export const test_clone_object_nullable = _test_clone(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.clone(input),
);
