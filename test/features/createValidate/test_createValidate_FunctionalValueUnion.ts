import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_validate_FunctionalValueUnion =
    _test_validate<FunctionalValueUnion>(FunctionalValueUnion)(
        typia.createValidate<FunctionalValueUnion>(),
    );
