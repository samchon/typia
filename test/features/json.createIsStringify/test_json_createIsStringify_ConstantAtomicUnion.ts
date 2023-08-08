import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_json_isStringify_ConstantAtomicUnion = _test_json_isStringify(
    "ConstantAtomicUnion",
    ConstantAtomicUnion.generate,
    typia.json.createIsStringify<ConstantAtomicUnion>(),
    ConstantAtomicUnion.SPOILERS,
);
