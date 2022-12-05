import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectInternal = _test_validateParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.validateParse<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
