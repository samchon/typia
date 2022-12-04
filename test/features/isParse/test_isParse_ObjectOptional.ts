import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectOptional = _test_isParse(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => TSON.isParse<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
