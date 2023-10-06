import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createValidate_FunctionalTupleUnion = _test_validate(
    "FunctionalTupleUnion",
)<FunctionalTupleUnion>(
    FunctionalTupleUnion
)(typia.createValidate<FunctionalTupleUnion>());
