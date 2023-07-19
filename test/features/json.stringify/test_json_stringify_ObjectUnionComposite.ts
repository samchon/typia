import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_json_stringify_ObjectUnionComposite =
    _test_json_stringify<ObjectUnionComposite>(ObjectUnionComposite)((input) =>
        typia.json.stringify(input),
    );
