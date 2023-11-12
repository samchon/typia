import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_reflect_metadata_TypeTagTypeBigInt = _test_reflect_metadata(
    "TypeTagTypeBigInt",
)(typia.reflect.metadata<[TypeTagTypeBigInt]>());
