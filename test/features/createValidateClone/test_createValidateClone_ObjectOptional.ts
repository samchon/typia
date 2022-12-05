import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectOptional = _test_validateClone(
    "ObjectOptional",
    ObjectOptional.generate,
    TSON.createValidateClone<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
