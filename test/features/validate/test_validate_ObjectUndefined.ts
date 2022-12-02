import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ObjectUndefined = _test_validate(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input) => TSON.validate(input),
    ObjectUndefined.SPOILERS,
);
