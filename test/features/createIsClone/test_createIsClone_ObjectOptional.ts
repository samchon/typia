import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createIsClone_ObjectOptional = _test_isClone(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createIsClone<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
