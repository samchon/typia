import TSON from "../../../src";
import { IObjectToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_to_json_atomic_union = _test_stringify(
    "toJSON() method returning atomic union type",
    IObjectToJsonAtomicUnion.generate(),
    TSON.createStringify<IObjectToJsonAtomicUnion>(),
);
