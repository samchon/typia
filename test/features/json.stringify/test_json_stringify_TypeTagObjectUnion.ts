import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_json_stringify_TypeTagObjectUnion = _test_json_stringify(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.json.stringify<TypeTagObjectUnion>(input),
);
