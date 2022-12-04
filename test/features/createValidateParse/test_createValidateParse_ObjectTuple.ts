import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectTuple = _test_validateParse(
    "ObjectTuple",
    ObjectTuple.generate,
    TSON.createValidateParse<ObjectTuple>(),
    ObjectTuple.SPOILERS,
);
