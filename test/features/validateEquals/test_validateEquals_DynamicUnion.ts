import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_validateEquals_DynamicUnion =
    _test_validateEquals<DynamicUnion>(DynamicUnion)((input) =>
        typia.validateEquals<DynamicUnion>(input),
    );
