import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assertEquals } from "../internal/_test_assertEquals";
export const test_createAssertEquals_ObjectSimple = _test_assertEquals("ObjectSimple", ObjectSimple.generate, (input: any) => {
    const $guard = (typia.createAssertEquals as any).guard;
    const $join = (typia.createAssertEquals as any).join;
    ((input: any, _path: string, _exceptionable: boolean): input is IBox3D => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.scale && null !== input.scale || $guard(_exceptionable, {
            path: _path + ".scale",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.scale
        })) && $ao1(input.scale, _path + ".scale", true && _exceptionable) && (("object" === typeof input.position && null !== input.position || $guard(_exceptionable, {
            path: _path + ".position",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.position
        })) && $ao1(input.position, _path + ".position", true && _exceptionable)) && (("object" === typeof input.rotate && null !== input.rotate || $guard(_exceptionable, {
            path: _path + ".rotate",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.rotate
        })) && $ao1(input.rotate, _path + ".rotate", true && _exceptionable)) && (("object" === typeof input.pivot && null !== input.pivot || $guard(_exceptionable, {
            path: _path + ".pivot",
            expected: "Resolve<ObjectSimple.IPoint3D>",
            value: input.pivot
        })) && $ao1(input.pivot, _path + ".pivot", true && _exceptionable)) && (4 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["scale", "position", "rotate", "pivot"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        })) && ("number" === typeof input.z || $guard(_exceptionable, {
            path: _path + ".z",
            expected: "number",
            value: input.z
        })) && (3 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).every(key => {
            if (["x", "y", "z"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return $guard(_exceptionable, {
                path: _path + $join(key),
                expected: "undefined",
                value: value
            });
        })));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectSimple.IBox3D>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ObjectSimple;
});
