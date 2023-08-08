import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_json_isParse_ArrayAtomicAlias = _test_json_isParse(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    typia.json.createIsParse<ArrayAtomicAlias>(),
    ArrayAtomicAlias.SPOILERS,
);
