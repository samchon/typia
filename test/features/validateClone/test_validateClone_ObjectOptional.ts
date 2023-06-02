import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_validateClone_ObjectOptional = _test_validateClone(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.validateClone(input),
    ObjectOptional.SPOILERS,
);
