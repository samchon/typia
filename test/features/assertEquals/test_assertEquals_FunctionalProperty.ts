import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertEquals_FunctionalProperty =
    _test_assertEquals<FunctionalProperty>(FunctionalProperty)((input) =>
        typia.assertEquals(input),
    );
