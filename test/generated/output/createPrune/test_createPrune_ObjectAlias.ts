import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectAlias } from "../../../structures/ObjectAlias";
export const test_createPrune_ObjectAlias = _test_prune("ObjectAlias", ObjectAlias.generate, (input: ObjectAlias): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "email" === key || "name" === key || "sex" === key || "age" === key || "dead" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
});
