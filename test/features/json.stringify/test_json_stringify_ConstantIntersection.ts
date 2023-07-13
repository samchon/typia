import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_json_stringify_ConstantIntersection = _test_json_stringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    (input) => typia.json.stringify(input),
);
