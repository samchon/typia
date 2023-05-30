import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_createPrune_ObjectOptional = _test_prune("ObjectOptional", ObjectOptional.generate, (input: ObjectOptional): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "email" === key || "sequence" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
