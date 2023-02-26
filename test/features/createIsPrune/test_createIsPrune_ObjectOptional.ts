import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createIsPrune_ObjectOptional = _test_isPrune(
    "ObjectOptional",
    ObjectOptional.generate,
    typia.createIsPrune<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
