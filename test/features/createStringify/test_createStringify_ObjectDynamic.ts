import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createStringify_ObjectDynamic = _test_stringify(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createStringify<ObjectDynamic>(),
);
