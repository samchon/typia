import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ObjectOptional = _test_assert(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createAssert<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);