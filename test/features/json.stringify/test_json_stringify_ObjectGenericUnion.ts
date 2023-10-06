import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_stringify_ObjectGenericUnion = _test_json_stringify(
    "ObjectGenericUnion",
)<ObjectGenericUnion>(ObjectGenericUnion)((input) =>
    typia.json.stringify<ObjectGenericUnion>(input),
);
