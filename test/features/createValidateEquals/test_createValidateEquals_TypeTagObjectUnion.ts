import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_validateEquals_TypeTagObjectUnion = _test_validateEquals(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)(
    typia.createValidateEquals<TypeTagObjectUnion>(),
);
