import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_createIs_ObjectClosure = (): void => _test_is(
    "ObjectClosure",
)<ObjectClosure>(
    ObjectClosure
)(typia.createIs<ObjectClosure>());
