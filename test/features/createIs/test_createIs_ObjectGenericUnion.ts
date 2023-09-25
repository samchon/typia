import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createIs_ObjectGenericUnion = _test_is(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)(typia.createIs<ObjectGenericUnion>());
