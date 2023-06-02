import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createValidateParse_ObjectOptional = _test_validateParse(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createValidateParse<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
