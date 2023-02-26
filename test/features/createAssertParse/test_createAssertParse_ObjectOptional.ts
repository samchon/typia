import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createAssertParse_ObjectOptional = _test_assertParse(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createAssertParse<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
