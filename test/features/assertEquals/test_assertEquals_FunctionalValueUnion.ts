import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assertEquals_FunctionalValueUnion =
    _test_assertEquals<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
        typia.assertEquals<FunctionalValueUnion>(input),
    );
