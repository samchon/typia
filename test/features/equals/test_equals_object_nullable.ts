import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_equals } from "./_test_equals";

export const test_equals_object_nullable = _test_equals(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.equals(input),
);
