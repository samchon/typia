import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_stringify_ObjectOptional =
    _test_json_stringify<ObjectOptional>(ObjectOptional)((input) =>
        typia.json.stringify<ObjectOptional>(input),
    );
