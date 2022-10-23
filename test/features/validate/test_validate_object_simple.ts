import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validate } from "./_test_validate";

export const test_validate_object_simple = _test_validate(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.validate(input),
    ObjectSimple.SPOILERS,
);
