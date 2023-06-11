import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_createValidateEquals_FunctionalTupleUnion =
    _test_validateEquals(
        "FunctionalTupleUnion",
        FunctionalTupleUnion.generate,
        typia.createValidateEquals<FunctionalTupleUnion>(),
    );
