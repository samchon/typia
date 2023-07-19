import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_assertEquals_FunctionalArray =
    _test_assertEquals<FunctionalArray>(FunctionalArray)((input) =>
        typia.assertEquals(input),
    );
