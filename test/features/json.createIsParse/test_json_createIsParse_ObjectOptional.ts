import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_json_isParse_ObjectOptional = _test_json_isParse(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)(typia.json.createIsParse<ObjectOptional>());
