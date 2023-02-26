import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_random_ObjectOptional = _test_random(
    "ObjectOptional",
    () => typia.random<ObjectOptional>(),
    typia.createAssert<ObjectOptional>(),
);
