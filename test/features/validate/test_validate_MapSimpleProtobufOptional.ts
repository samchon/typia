import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_validate_MapSimpleProtobufOptional = _test_validate(
  "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)((input) =>
  typia.validate<MapSimpleProtobufOptional>(input),
);
