import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectOptional = _test_validateStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => TSON.validateStringify(input),
    ObjectOptional.SPOILERS,
);
