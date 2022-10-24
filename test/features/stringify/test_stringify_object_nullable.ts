import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_nullable = _test_stringify(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.stringify(input),
);
