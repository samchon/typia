import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_random } from "../internal/_test_random";
export const test_random_ObjectUnionImplicit = _test_random("ObjectUnionImplicit", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $ro0 = (recursive = false, depth = 0) => ({
        x: (generator.number ?? $generator.number)(0, 100),
        y: (generator.number ?? $generator.number)(0, 100),
        slope: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    const $ro1 = (recursive = false, depth = 0) => ({
        p1: $ro0(recursive, recursive ? 1 + depth : depth),
        p2: $ro0(recursive, recursive ? 1 + depth : depth),
        width: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        distance: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        p1: $ro0(recursive, recursive ? 1 + depth : depth),
        p2: $ro0(recursive, recursive ? 1 + depth : depth),
        p3: $ro0(recursive, recursive ? 1 + depth : depth),
        width: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        height: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        area: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        p1: $ro0(recursive, recursive ? 1 + depth : depth),
        p2: $ro0(recursive, recursive ? 1 + depth : depth),
        p3: $ro0(recursive, recursive ? 1 + depth : depth),
        p4: $ro0(recursive, recursive ? 1 + depth : depth),
        width: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        height: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])(),
        area: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        points: (generator.array ?? $generator.array)(() => $ro0(recursive, recursive ? 1 + depth : depth)),
        length: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    const $ro5 = (recursive = false, depth = 0) => ({
        outer: $ro4(recursive, recursive ? 1 + depth : depth),
        inner: $pick([
            () => undefined,
            () => (generator.array ?? $generator.array)(() => $ro4(recursive, recursive ? 1 + depth : depth))
        ])(),
        area: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    const $ro6 = (recursive = false, depth = 0) => ({
        centroid: $pick([
            () => undefined,
            () => $ro0(recursive, recursive ? 1 + depth : depth)
        ])(),
        radius: (generator.number ?? $generator.number)(0, 100),
        area: $pick([
            () => undefined,
            () => (generator.number ?? $generator.number)(0, 100)
        ])()
    });
    return (generator.array ?? $generator.array)(() => $pick([
        () => $ro0(),
        () => $ro1(),
        () => $ro2(),
        () => $ro3(),
        () => $ro4(),
        () => $ro5(),
        () => $ro6()
    ])());
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectUnionImplicit => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.x || $guard(_exceptionable, {
            path: _path + ".x",
            expected: "number",
            value: input.x
        })) && ("number" === typeof input.y || $guard(_exceptionable, {
            path: _path + ".y",
            expected: "number",
            value: input.y
        })) && (undefined === input.slope || "number" === typeof input.slope || $guard(_exceptionable, {
            path: _path + ".slope",
            expected: "(number | undefined)",
            value: input.slope
        }));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width || $guard(_exceptionable, {
            path: _path + ".width",
            expected: "(number | undefined)",
            value: input.width
        })) && (undefined === input.distance || "number" === typeof input.distance || $guard(_exceptionable, {
            path: _path + ".distance",
            expected: "(number | undefined)",
            value: input.distance
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p3
        })) && $ao0(input.p3, _path + ".p3", true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width || $guard(_exceptionable, {
            path: _path + ".width",
            expected: "(number | undefined)",
            value: input.width
        })) && (undefined === input.height || "number" === typeof input.height || $guard(_exceptionable, {
            path: _path + ".height",
            expected: "(number | undefined)",
            value: input.height
        })) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.p1 && null !== input.p1 || $guard(_exceptionable, {
            path: _path + ".p1",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p1
        })) && $ao0(input.p1, _path + ".p1", true && _exceptionable) && (("object" === typeof input.p2 && null !== input.p2 || $guard(_exceptionable, {
            path: _path + ".p2",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p2
        })) && $ao0(input.p2, _path + ".p2", true && _exceptionable)) && (("object" === typeof input.p3 && null !== input.p3 || $guard(_exceptionable, {
            path: _path + ".p3",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p3
        })) && $ao0(input.p3, _path + ".p3", true && _exceptionable)) && (("object" === typeof input.p4 && null !== input.p4 || $guard(_exceptionable, {
            path: _path + ".p4",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: input.p4
        })) && $ao0(input.p4, _path + ".p4", true && _exceptionable)) && (undefined === input.width || "number" === typeof input.width || $guard(_exceptionable, {
            path: _path + ".width",
            expected: "(number | undefined)",
            value: input.width
        })) && (undefined === input.height || "number" === typeof input.height || $guard(_exceptionable, {
            path: _path + ".height",
            expected: "(number | undefined)",
            value: input.height
        })) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => (Array.isArray(input.points) || $guard(_exceptionable, {
            path: _path + ".points",
            expected: "Array<Resolve<ObjectUnionImplicit.IPoint>>",
            value: input.points
        })) && input.points.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".points[" + _index2 + "]",
            expected: "Resolve<ObjectUnionImplicit.IPoint>",
            value: elem
        })) && $ao0(elem, _path + ".points[" + _index2 + "]", true && _exceptionable)) && (undefined === input.length || "number" === typeof input.length || $guard(_exceptionable, {
            path: _path + ".length",
            expected: "(number | undefined)",
            value: input.length
        }));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.outer && null !== input.outer || $guard(_exceptionable, {
            path: _path + ".outer",
            expected: "Resolve<ObjectUnionImplicit.IPolyline>",
            value: input.outer
        })) && $ao4(input.outer, _path + ".outer", true && _exceptionable) && (undefined === input.inner || (Array.isArray(input.inner) || $guard(_exceptionable, {
            path: _path + ".inner",
            expected: "(Array<Resolve<ObjectUnionImplicit.IPolyline>> | undefined)",
            value: input.inner
        })) && input.inner.every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".inner[" + _index3 + "]",
            expected: "Resolve<ObjectUnionImplicit.IPolyline>",
            value: elem
        })) && $ao4(elem, _path + ".inner[" + _index3 + "]", true && _exceptionable))) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $ao6 = (input: any, _path: string, _exceptionable: boolean) => (undefined === input.centroid || ("object" === typeof input.centroid && null !== input.centroid || $guard(_exceptionable, {
            path: _path + ".centroid",
            expected: "(Resolve<ObjectUnionImplicit.IPoint> | undefined)",
            value: input.centroid
        })) && $ao0(input.centroid, _path + ".centroid", true && _exceptionable)) && ("number" === typeof input.radius || $guard(_exceptionable, {
            path: _path + ".radius",
            expected: "number",
            value: input.radius
        })) && (undefined === input.area || "number" === typeof input.area || $guard(_exceptionable, {
            path: _path + ".area",
            expected: "(number | undefined)",
            value: input.area
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.x)
                return $ao0(input, _path, true && _exceptionable);
            if (undefined !== input.p4)
                return $ao3(input, _path, true && _exceptionable);
            if (undefined !== input.points)
                return $ao4(input, _path, true && _exceptionable);
            if (undefined !== input.outer)
                return $ao5(input, _path, true && _exceptionable);
            if (undefined !== input.radius)
                return $ao6(input, _path, true && _exceptionable);
            return (() => {
                if (undefined !== input.p3)
                    return $ao2(input, _path, true && _exceptionable);
                return $ao1(input, _path, true && _exceptionable);
            })();
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ObjectUnionImplicit>;
});
