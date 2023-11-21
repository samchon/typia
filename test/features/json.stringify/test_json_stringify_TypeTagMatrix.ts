import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_stringify_TypeTagMatrix = _test_json_stringify(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.json.stringify<TypeTagMatrix>(input),
);
