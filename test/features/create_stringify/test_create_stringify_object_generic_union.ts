import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_generic_union = _test_stringify(
    "generic unioned object",
    ObjectGenericUnion.generate,
    TSON.createStringify<ObjectGenericUnion>(),
);
