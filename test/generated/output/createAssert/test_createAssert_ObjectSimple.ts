import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_createAssert_ObjectSimple = _test_assert(
    "ObjectSimple",
    ObjectSimple.generate,
    (input: any): ObjectSimple => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectSimple => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.scale && null !== input.scale) ||
                    $guard(_exceptionable, {
                        path: _path + ".scale",
                        expected: "Resolve<ObjectSimple.IPoint3D>",
                        value: input.scale,
                    })) &&
                $ao1(input.scale, _path + ".scale", true && _exceptionable) &&
                (("object" === typeof input.position &&
                    null !== input.position) ||
                    $guard(_exceptionable, {
                        path: _path + ".position",
                        expected: "Resolve<ObjectSimple.IPoint3D>",
                        value: input.position,
                    })) &&
                $ao1(
                    input.position,
                    _path + ".position",
                    true && _exceptionable,
                ) &&
                (("object" === typeof input.rotate && null !== input.rotate) ||
                    $guard(_exceptionable, {
                        path: _path + ".rotate",
                        expected: "Resolve<ObjectSimple.IPoint3D>",
                        value: input.rotate,
                    })) &&
                $ao1(input.rotate, _path + ".rotate", true && _exceptionable) &&
                (("object" === typeof input.pivot && null !== input.pivot) ||
                    $guard(_exceptionable, {
                        path: _path + ".pivot",
                        expected: "Resolve<ObjectSimple.IPoint3D>",
                        value: input.pivot,
                    })) &&
                $ao1(input.pivot, _path + ".pivot", true && _exceptionable);
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.x && Number.isFinite(input.x)) ||
                    $guard(_exceptionable, {
                        path: _path + ".x",
                        expected: "number",
                        value: input.x,
                    })) &&
                (("number" === typeof input.y && Number.isFinite(input.y)) ||
                    $guard(_exceptionable, {
                        path: _path + ".y",
                        expected: "number",
                        value: input.y,
                    })) &&
                (("number" === typeof input.z && Number.isFinite(input.z)) ||
                    $guard(_exceptionable, {
                        path: _path + ".z",
                        expected: "number",
                        value: input.z,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectSimple.IBox3D>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    ObjectSimple.SPOILERS,
);
