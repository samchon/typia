import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_validate_FunctionalArrayUnion =
    _test_validate<FunctionalArrayUnion>(FunctionalArrayUnion)(
        typia.createValidate<FunctionalArrayUnion>(),
    );
