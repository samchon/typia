import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectOptional = _test_validateParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => TSON.validateParse<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);