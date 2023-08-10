import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_validate_ToJsonAtomicUnion =
    _test_validate<ToJsonAtomicUnion>(ToJsonAtomicUnion)(
        typia.createValidate<ToJsonAtomicUnion>(),
    );
