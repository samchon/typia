import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectSimple = _test_validate(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => TSON.validate(input),
    ObjectSimple.SPOILERS,
);