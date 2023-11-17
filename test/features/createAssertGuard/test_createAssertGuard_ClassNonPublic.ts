import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createAssertGuard_ClassNonPublic = _test_assertGuard(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)(typia.createAssertGuard<ClassNonPublic>());
