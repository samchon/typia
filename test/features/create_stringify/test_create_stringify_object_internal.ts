import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_internal = _test_stringify(
    "object internal",
    ObjectInternal.generate,
    TSON.createStringify<ObjectInternal>(),
);
