import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_json_isParse_TypeTagAtomicUnion = _test_json_isParse(
    "TypeTagAtomicUnion",
)<TypeTagAtomicUnion>(TypeTagAtomicUnion)((input) =>
    typia.json.isParse<TypeTagAtomicUnion>(input),
);
