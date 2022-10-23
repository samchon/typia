import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validate } from "./_test_validate";

export const test_validate_object_tuple = _test_validate(
    "tuple union object",
    ObjectTuple.generate,
    (input) => TSON.validate(input),
    ObjectTuple.SPOILERS,
);
