import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_createIs_ObjectPropertyNullable = (): void => _test_is(
    "ObjectPropertyNullable",
)<ObjectPropertyNullable>(
    ObjectPropertyNullable
)(typia.createIs<ObjectPropertyNullable>());
