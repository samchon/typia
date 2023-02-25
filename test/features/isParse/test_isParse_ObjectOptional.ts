import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectOptional = _test_isParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.isParse<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
