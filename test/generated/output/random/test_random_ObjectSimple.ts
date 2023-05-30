import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectSimple } from "../../../structures/ObjectSimple";
export const test_random_ObjectSimple = _test_random("ObjectSimple", () => ((generator?: Partial<typia.IRandomGenerator>): typia.Primitive<ObjectSimple> => {
    const $generator = (typia.random as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        scale: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        position: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        rotate: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        pivot: $ro1(_recursive, _recursive ? 1 + _depth : _depth)
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
        x: (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        y: (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100),
        z: (generator?.customs ?? $generator.customs)?.number?.([]) ?? (generator?.number ?? $generator.number)(0, 100)
    });
    return $ro0();
})(), (input: any): typia.Primitive<ObjectSimple> => {
    const $guard = (typia.createAssert as any).guard;
    const __is = (input: any): input is typia.Primitive<ObjectSimple> => {
        const $io0 = (input: any): boolean => "object" === typeof input.scale && null !== input.scale && ("number" === typeof input.scale.x && Number.isFinite(input.scale.x) && ("number" === typeof input.scale.y && Number.isFinite(input.scale.y)) && ("number" === typeof input.scale.z && Number.isFinite(input.scale.z))) && ("object" === typeof input.position && null !== input.position && ("number" === typeof input.position.x && Number.isFinite(input.position.x) && ("number" === typeof input.position.y && Number.isFinite(input.position.y)) && ("number" === typeof input.position.z && Number.isFinite(input.position.z)))) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof input.rotate.x && Number.isFinite(input.rotate.x) && ("number" === typeof input.rotate.y && Number.isFinite(input.rotate.y)) && ("number" === typeof input.rotate.z && Number.isFinite(input.rotate.z)))) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof input.pivot.x && Number.isFinite(input.pivot.x) && ("number" === typeof input.pivot.y && Number.isFinite(input.pivot.y)) && ("number" === typeof input.pivot.z && Number.isFinite(input.pivot.z))));
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is typia.Primitive<ObjectSimple> => {
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("object" === typeof input.scale && null !== input.scale || $guard(_exceptionable, {
                path: _path + ".scale",
                expected: "ObjectSimple.IPoint3D",
                value: input.scale
            })) && $ao1(input.scale, _path + ".scale", true && _exceptionable) && (("object" === typeof input.position && null !== input.position || $guard(_exceptionable, {
                path: _path + ".position",
                expected: "ObjectSimple.IPoint3D",
                value: input.position
            })) && $ao1(input.position, _path + ".position", true && _exceptionable)) && (("object" === typeof input.rotate && null !== input.rotate || $guard(_exceptionable, {
                path: _path + ".rotate",
                expected: "ObjectSimple.IPoint3D",
                value: input.rotate
            })) && $ao1(input.rotate, _path + ".rotate", true && _exceptionable)) && (("object" === typeof input.pivot && null !== input.pivot || $guard(_exceptionable, {
                path: _path + ".pivot",
                expected: "ObjectSimple.IPoint3D",
                value: input.pivot
            })) && $ao1(input.pivot, _path + ".pivot", true && _exceptionable));
            const $ao1 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("number" === typeof input.x && Number.isFinite(input.x) || $guard(_exceptionable, {
                path: _path + ".x",
                expected: "number",
                value: input.x
            })) && ("number" === typeof input.y && Number.isFinite(input.y) || $guard(_exceptionable, {
                path: _path + ".y",
                expected: "number",
                value: input.y
            })) && ("number" === typeof input.z && Number.isFinite(input.z) || $guard(_exceptionable, {
                path: _path + ".z",
                expected: "number",
                value: input.z
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "ObjectSimple.IBox3D",
                value: input
            })) && $ao0(input, _path + "", true);
        })(input, "$input", true);
    return input;
});
