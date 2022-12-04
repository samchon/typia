import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectOptional = _test_isParse(
    "ObjectOptional",
    ObjectOptional.generate,
    TSON.createIsParse<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
