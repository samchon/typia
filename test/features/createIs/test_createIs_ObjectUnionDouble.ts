import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createIs_ObjectUnionDouble = _test_is(
    "ObjectUnionDouble",
)<ObjectUnionDouble>(
    ObjectUnionDouble
)(typia.createIs<ObjectUnionDouble>());
