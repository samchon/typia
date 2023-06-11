import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createValidateClone_ObjectOptional = _test_validateClone(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createValidateClone<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
