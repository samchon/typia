import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_is_MapSimpleProtobufOptional = _test_is(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)((input) =>
    typia.is<MapSimpleProtobufOptional>(input),
);
