import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_isPrune_ObjectOptional = _test_isPrune(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.isPrune(input),
    ObjectOptional.SPOILERS,
);
