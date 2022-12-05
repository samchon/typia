import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectDynamic = _test_validateParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => TSON.validateParse<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
