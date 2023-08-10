import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_validate_ConstantIntersection =
    _test_validate<ConstantIntersection>(ConstantIntersection)((input) =>
        typia.validate<ConstantIntersection>(input),
    );
