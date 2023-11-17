import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_assertGuard_MapSimpleProtobufOptional = _test_assertGuard(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)((input) =>
    typia.assertGuard<MapSimpleProtobufOptional>(input),
);
