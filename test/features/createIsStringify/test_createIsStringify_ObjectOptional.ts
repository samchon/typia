import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createIsStringify_ObjectOptional = _test_isStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createIsStringify<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
