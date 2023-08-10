import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_json_stringify_ObjectGenericArray =
    _test_json_stringify<ObjectGenericArray>(ObjectGenericArray)((input) =>
        typia.json.stringify<ObjectGenericArray>(input),
    );
