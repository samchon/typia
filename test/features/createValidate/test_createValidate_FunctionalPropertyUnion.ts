import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_validate_FunctionalPropertyUnion = _test_validate(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    typia.createValidate<FunctionalPropertyUnion>(),
);
