import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_createStringify_ConstantIntersection = _test_stringify(
    "ConstantIntersection",
    ConstantIntersection.generate,
    typia.createStringify<ConstantIntersection>(),
);
