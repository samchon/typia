import TSON from "../../../src";
import { IObjectToJsonWithUnion } from "../../structures/IObjectToJsonUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_with_union = _test_stringify(
    "toJSON() with other union",
    IObjectToJsonWithUnion.generate(),
    (input) => TSON.stringify(input),
);
