import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectSimple = _test_validateParse(
    "ObjectSimple",
    ObjectSimple.generate,
    (input) => TSON.validateParse<ObjectSimple>(input),
    ObjectSimple.SPOILERS,
);
