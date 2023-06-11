import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertEquals_FunctionalPropertyUnion =
    _test_assertEquals(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        typia.createAssertEquals<FunctionalPropertyUnion>(),
    );
