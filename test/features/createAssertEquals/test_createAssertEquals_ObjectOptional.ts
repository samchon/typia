import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_createAssertEquals_ObjectOptional = _test_assertEquals(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.createAssertEquals<ObjectOptional>());
