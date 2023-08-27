import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_is_TypeTagFormat = _test_is("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
)(typia.createIs<TypeTagFormat>());
