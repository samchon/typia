import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createIs_TypeTagTypeUnion = _test_is(
    "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)(typia.createIs<TypeTagTypeUnion>());
