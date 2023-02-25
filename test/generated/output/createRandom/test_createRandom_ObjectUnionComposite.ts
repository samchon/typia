import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_random } from "../internal/_test_random";
export const test_createRandom_ObjectUnionComposite = _test_random("ObjectUnionComposite", (generator: typia.IRandomGenerator = (typia.createRandom as any).generator) => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        x: (generator.number ?? $generator.number)(0, 100),
        y: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        p1: $ro0(recursive, recursive ? 1 + depth : depth),
        p2: $ro0(recursive, recursive ? 1 + depth : depth)
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        p1: $ro0(recursive, recursive ? 1 + depth : depth),
        p2: $ro0(recursive, recursive ? 1 + depth : depth),
        p3: $ro0(recursive, recursive ? 1 + depth : depth)
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        p1: $ro0(recursive, recursive ? 1 + depth : depth),
        p2: $ro0(recursive, recursive ? 1 + depth : depth),
        p3: $ro0(recursive, recursive ? 1 + depth : depth),
        p4: $ro0(recursive, recursive ? 1 + depth : depth)
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        points: (generator.array ?? $generator.array)(() => $ro0(recursive, recursive ? 1 + depth : depth))
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        outer: $ro4(recursive, recursive ? 1 + depth : depth),
        inner: (generator.array ?? $generator.array)(() => $ro4(recursive, recursive ? 1 + depth : depth))
    });
    const $ro6 = (recursive = false, depth = 0) => ({
        outer: (generator.array ?? $generator.array)(() => $ro0(recursive, recursive ? 1 + depth : depth)),
        inner: $ro0(recursive, recursive ? 1 + depth : depth)
    });
    const $ro7 = (recursive = false, depth = 0) => ({
        centroid: $ro0(recursive, recursive ? 1 + depth : depth),
        radius: (generator.number ?? $generator.number)(0, 100)
    });
    return (generator.array ?? $generator.array)(() => $pick([
        () => $ro0(),
        () => $ro1(),
        () => $ro2(),
        () => $ro3(),
        () => $ro4(),
        () => $ro5(),
        () => $ro6(),
        () => $ro7()
    ])());
}, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionComposite => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        }));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p3
        })) && $ao0(input.p3, _path + ".p3", true && _exceptionable));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p3
        })) && $ao0(input.p3, _path + ".p3", true && _exceptionable)) && (("object" === typeof input.p4 && null !== input.p4 || $guard(_exceptionable, {
            path: _path + ".p4",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.p4
        })) && $ao0(input.p4, _path + ".p4", true && _exceptionable));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.points) || $guard(_exceptionable, {
            path: _path + ".points",
            expected: "Array<Resolve<ObjectUnionComposite.IPoint>>",
            value: input.points
        })) && input.points.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".points[" + _index2 + "]",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: elem
        })) && $ao0(elem, _path + ".points[" + _index2 + "]", true && _exceptionable));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.outer && null !== input.outer || $guard(_exceptionable, {
            path: _path + ".outer",
            expected: "Resolve<ObjectUnionComposite.IPolyline>",
            value: input.outer
        })) && $ao4(input.outer, _path + ".outer", true && _exceptionable) && ((Array.isArray(input.inner) || $guard(_exceptionable, {
            path: _path + ".inner",
            expected: "Array<Resolve<ObjectUnionComposite.IPolyline>>",
            value: input.inner
        })) && input.inner.every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".inner[" + _index3 + "]",
            expected: "Resolve<ObjectUnionComposite.IPolyline>",
            value: elem
        })) && $ao4(elem, _path + ".inner[" + _index3 + "]", true && _exceptionable)));
        const $ao6 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.outer) || $guard(_exceptionable, {
            path: _path + ".outer",
            expected: "Array<Resolve<ObjectUnionComposite.IPoint>>",
            value: input.outer
        })) && input.outer.every((elem: any, _index4: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".outer[" + _index4 + "]",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: elem
        })) && $ao0(elem, _path + ".outer[" + _index4 + "]", true && _exceptionable)) && (("object" === typeof input.inner && null !== input.inner || $guard(_exceptionable, {
            path: _path + ".inner",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.inner
        })) && $ao0(input.inner, _path + ".inner", true && _exceptionable));
        const $ao7 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.centroid && null !== input.centroid || $guard(_exceptionable, {
            path: _path + ".centroid",
            expected: "Resolve<ObjectUnionComposite.IPoint>",
            value: input.centroid
        })) && $ao0(input.centroid, _path + ".centroid", true && _exceptionable) && ("number" === typeof input.radius || $guard(_exceptionable, {
            path: _path + ".radius",
            expected: "number",
            value: input.radius
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.x)
                return $ao0(input, _path, true && _exceptionable);
            if (undefined !== input.p4)
                return $ao3(input, _path, true && _exceptionable);
            if (undefined !== input.points)
                return $ao4(input, _path, true && _exceptionable);
            if ("object" === typeof input.outer && null !== input.outer && $ao4(input.outer, _path + ".outer", false && _exceptionable))
                return $ao5(input, _path, true && _exceptionable);
            if (Array.isArray(input.outer) && input.outer.every((elem: any, _index5: number) => "object" === typeof elem && null !== elem && $ao0(elem, _path + ".outer[" + _index5 + "]", false && _exceptionable)))
                return $ao6(input, _path, true && _exceptionable);
            if (undefined !== input.centroid)
                return $ao7(input, _path, true && _exceptionable);
            return (() => {
                if (undefined !== input.p3)
                    return $ao2(input, _path, true && _exceptionable);
                return $ao1(input, _path, true && _exceptionable);
            })();
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionComposite.ICircle> | Resolve<ObjectUnionComposite.ILine> | Resolve<ObjectUnionComposite.IPoint> | Resolve<ObjectUnionComposite.IPointedShape> | Resolve<ObjectUnionComposite.IPolygon> | Resolve<ObjectUnionComposite.IPolyline> | Resolve<ObjectUnionComposite.IRectangle> | Resolve<ObjectUnionComposite.ITriangle>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectUnionComposite>;
});
