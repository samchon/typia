import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_isParse_ObjectOptional = _test_isParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.isParse<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
