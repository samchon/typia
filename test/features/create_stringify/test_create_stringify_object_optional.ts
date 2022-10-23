import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_optional = _test_stringify(
    "optional object",
    ObjectOptional.generate(),
    TSON.createStringify<ObjectOptional>(),
);
