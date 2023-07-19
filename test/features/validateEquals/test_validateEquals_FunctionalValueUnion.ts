import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_validateEquals_FunctionalValueUnion =
    _test_validateEquals<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
        typia.validateEquals(input),
    );
