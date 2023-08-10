import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { MapSimple } from "../../structures/MapSimple";

export const test_misc_assertClone_MapSimple =
    _test_misc_assertClone<MapSimple>(MapSimple)((input) =>
        typia.misc.assertClone<MapSimple>(input),
    );
