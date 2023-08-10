import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_validate_ObjectIntersection =
    _test_validate<ObjectIntersection>(ObjectIntersection)((input) =>
        typia.validate<ObjectIntersection>(input),
    );
