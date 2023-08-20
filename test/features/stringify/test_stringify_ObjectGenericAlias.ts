import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_stringify_ObjectGenericAlias = _test_stringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.stringify<ObjectGenericAlias>(input),
);
