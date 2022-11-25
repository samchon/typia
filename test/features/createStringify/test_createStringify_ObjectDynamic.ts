import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectDynamic = _test_stringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    TSON.createStringify<ObjectDynamic>(),
);
