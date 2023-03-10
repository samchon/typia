import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createAssertClone_ObjectOptional = _test_assertClone(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createAssertClone<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
