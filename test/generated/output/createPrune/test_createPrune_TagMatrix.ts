import typia from "../../../src";
import { TagMatrix } from "../../structures/TagMatrix";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_TagMatrix = _test_prune("TagMatrix", TagMatrix.generate, (input: TagMatrix): void => {
    const $is_uuid = (typia.createPrune as any).is_uuid;
    const $po0 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("matrix" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
