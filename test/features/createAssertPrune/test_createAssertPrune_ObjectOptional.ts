import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createAssertPrune_ObjectOptional = _test_assertPrune(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createAssertPrune<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
