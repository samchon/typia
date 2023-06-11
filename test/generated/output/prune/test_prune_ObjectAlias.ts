import typia from "../../../../src";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_prune } from "../../../internal/_test_prune";
export const test_prune_ObjectAlias = _test_prune("ObjectAlias", ObjectAlias.generate, (input) => ((input: Array<ObjectAlias.IMember>): void => {
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po0(elem);
    });
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "email" === key || "name" === key || "sex" === key || "age" === key || "dead" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        $pp0(input);
})(input));
