import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_isPrune_ObjectSimple = _test_isPrune("ObjectSimple", ObjectSimple.generate, (input) => ((input: any): input is IBox3D => { const is = (input: any): input is IBox3D => {
    const $io0 = (input: any) => "object" === typeof input.scale && null !== input.scale && ("number" === typeof input.scale.x && "number" === typeof input.scale.y && "number" === typeof input.scale.z) && ("object" === typeof input.position && null !== input.position && ("number" === typeof input.position.x && "number" === typeof input.position.y && "number" === typeof input.position.z)) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof input.rotate.x && "number" === typeof input.rotate.y && "number" === typeof input.rotate.z)) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof input.pivot.x && "number" === typeof input.pivot.y && "number" === typeof input.pivot.z));
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: IBox3D): void => {
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $po0 = (input: any) => {
        if ("object" === typeof input.scale && null !== input.scale)
            $po1(input.scale);
        if ("object" === typeof input.position && null !== input.position)
            $po1(input.position);
        if ("object" === typeof input.rotate && null !== input.rotate)
            $po1(input.rotate);
        if ("object" === typeof input.pivot && null !== input.pivot)
            $po1(input.pivot);
        for (const key of Object.keys(input)) {
            if ("scale" === key || "position" === key || "rotate" === key || "pivot" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key || "z" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), ObjectSimple.SPOILERS);
