import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_is_ObjectOptional = _test_is(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createIs<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
