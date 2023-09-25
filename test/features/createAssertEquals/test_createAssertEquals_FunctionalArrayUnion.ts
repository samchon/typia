import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertEquals_FunctionalArrayUnion = _test_assertEquals(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(FunctionalArrayUnion)(
    typia.createAssertEquals<FunctionalArrayUnion>(),
);
