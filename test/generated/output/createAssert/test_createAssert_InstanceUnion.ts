import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { InstanceUnion } from "../../../structures/InstanceUnion";

export const test_createAssert_InstanceUnion = _test_assert(
    "InstanceUnion",
    InstanceUnion.generate,
    (input: any): InstanceUnion => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is InstanceUnion => {
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
            const $ao2 = (
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
                ("point" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"point"',
                        value: input.type,
                    }));
            const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(_exceptionable, {
                        path: _path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao4(input.p1, _path + ".p1", true && _exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(_exceptionable, {
                        path: _path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao4(input.p2, _path + ".p2", true && _exceptionable) &&
                ("line" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"line"',
                        value: input.type,
                    }));
            const $ao4 = (
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
                    }));
            const $ao5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(_exceptionable, {
                        path: _path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao4(input.p1, _path + ".p1", true && _exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(_exceptionable, {
                        path: _path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao4(input.p2, _path + ".p2", true && _exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(_exceptionable, {
                        path: _path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao4(input.p3, _path + ".p3", true && _exceptionable) &&
                ("triangle" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"triangle"',
                        value: input.type,
                    }));
            const $ao6 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.p1 && null !== input.p1) ||
                    $guard(_exceptionable, {
                        path: _path + ".p1",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p1,
                    })) &&
                $ao4(input.p1, _path + ".p1", true && _exceptionable) &&
                (("object" === typeof input.p2 && null !== input.p2) ||
                    $guard(_exceptionable, {
                        path: _path + ".p2",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p2,
                    })) &&
                $ao4(input.p2, _path + ".p2", true && _exceptionable) &&
                (("object" === typeof input.p3 && null !== input.p3) ||
                    $guard(_exceptionable, {
                        path: _path + ".p3",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p3,
                    })) &&
                $ao4(input.p3, _path + ".p3", true && _exceptionable) &&
                (("object" === typeof input.p4 && null !== input.p4) ||
                    $guard(_exceptionable, {
                        path: _path + ".p4",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.p4,
                    })) &&
                $ao4(input.p4, _path + ".p4", true && _exceptionable) &&
                ("rectangle" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"rectangle"',
                        value: input.type,
                    }));
            const $ao7 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.points) ||
                    $guard(_exceptionable, {
                        path: _path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, _index6: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".points[" + _index6 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao4(
                            elem,
                            _path + ".points[" + _index6 + "]",
                            true && _exceptionable,
                        ),
                ) &&
                ("polyline" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"polyline"',
                        value: input.type,
                    }));
            const $ao8 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.outer && null !== input.outer) ||
                    $guard(_exceptionable, {
                        path: _path + ".outer",
                        expected: "Resolve<ObjectUnionExplicit.IPolyline>",
                        value: input.outer,
                    })) &&
                $ao9(input.outer, _path + ".outer", true && _exceptionable) &&
                (Array.isArray(input.inner) ||
                    $guard(_exceptionable, {
                        path: _path + ".inner",
                        expected:
                            "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                        value: input.inner,
                    })) &&
                input.inner.every(
                    (elem: any, _index7: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner[" + _index7 + "]",
                                expected:
                                    "Resolve<ObjectUnionExplicit.IPolyline>",
                                value: elem,
                            })) &&
                        $ao9(
                            elem,
                            _path + ".inner[" + _index7 + "]",
                            true && _exceptionable,
                        ),
                ) &&
                ("polygon" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"polygon"',
                        value: input.type,
                    }));
            const $ao9 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (Array.isArray(input.points) ||
                    $guard(_exceptionable, {
                        path: _path + ".points",
                        expected: "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                        value: input.points,
                    })) &&
                input.points.every(
                    (elem: any, _index8: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".points[" + _index8 + "]",
                                expected: "Resolve<ObjectUnionExplicit.IPoint>",
                                value: elem,
                            })) &&
                        $ao4(
                            elem,
                            _path + ".points[" + _index8 + "]",
                            true && _exceptionable,
                        ),
                );
            const $ao10 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("object" === typeof input.centroid &&
                    null !== input.centroid) ||
                    $guard(_exceptionable, {
                        path: _path + ".centroid",
                        expected: "Resolve<ObjectUnionExplicit.IPoint>",
                        value: input.centroid,
                    })) &&
                $ao4(
                    input.centroid,
                    _path + ".centroid",
                    true && _exceptionable,
                ) &&
                (("number" === typeof input.radius &&
                    Number.isFinite(input.radius)) ||
                    $guard(_exceptionable, {
                        path: _path + ".radius",
                        expected: "number",
                        value: input.radius,
                    })) &&
                ("circle" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"circle"',
                        value: input.type,
                    }));
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
                    if ("point" === input.type)
                        return $ao2(input, _path, true && _exceptionable);
                    if ("line" === input.type)
                        return $ao3(input, _path, true && _exceptionable);
                    if ("triangle" === input.type)
                        return $ao5(input, _path, true && _exceptionable);
                    if ("rectangle" === input.type)
                        return $ao6(input, _path, true && _exceptionable);
                    if ("polyline" === input.type)
                        return $ao7(input, _path, true && _exceptionable);
                    if ("polygon" === input.type)
                        return $ao8(input, _path, true && _exceptionable);
                    if ("circle" === input.type)
                        return $ao10(input, _path, true && _exceptionable);
                    return $guard(_exceptionable, {
                        path: _path,
                        expected:
                            '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                        value: input,
                    });
                })();
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            'Array<(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)>',
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (null !== elem ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    '(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)',
                                value: elem,
                            })) &&
                        (undefined !== elem ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    '(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)',
                                value: elem,
                            })) &&
                        (("number" === typeof elem && Number.isFinite(elem)) ||
                            elem instanceof Uint8Array ||
                            (elem instanceof Set &&
                                [...elem].every(
                                    (elem: any, _index2: number) =>
                                        "boolean" === typeof elem ||
                                        $guard(true, {
                                            path:
                                                _path +
                                                "[" +
                                                _index1 +
                                                "][" +
                                                _index2 +
                                                "]",
                                            expected: "boolean",
                                            value: elem,
                                        }),
                                )) ||
                            elem instanceof Map ||
                            (Array.isArray(elem) &&
                                (() => {
                                    if (0 === elem.length) return true;
                                    const tupleList = [
                                        [
                                            (top: any) =>
                                                elem.length === 2 &&
                                                "string" === typeof elem[0] &&
                                                "string" === typeof elem[1],
                                            (top: any) =>
                                                (top.length === 2 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "[string, string]",
                                                        value: top,
                                                    })) &&
                                                ("string" === typeof top[0] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: top[0],
                                                    })) &&
                                                ("string" === typeof top[1] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][1]",
                                                        expected: "string",
                                                        value: top[1],
                                                    })),
                                        ],
                                        [
                                            (top: any) =>
                                                elem.length === 3 &&
                                                "boolean" === typeof elem[0] &&
                                                "number" === typeof elem[1] &&
                                                Number.isFinite(elem[1]) &&
                                                "number" === typeof elem[2] &&
                                                Number.isFinite(elem[2]),
                                            (top: any) =>
                                                (top.length === 3 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "[boolean, number, number]",
                                                        value: top,
                                                    })) &&
                                                ("boolean" === typeof top[0] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][0]",
                                                        expected: "boolean",
                                                        value: top[0],
                                                    })) &&
                                                (("number" === typeof top[1] &&
                                                    Number.isFinite(top[1])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: top[1],
                                                    })) &&
                                                (("number" === typeof top[2] &&
                                                    Number.isFinite(top[2])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][2]",
                                                        expected: "number",
                                                        value: top[2],
                                                    })),
                                        ],
                                        [
                                            (top: any) => elem.length === 0,
                                            (top: any) =>
                                                top.length === 0 ||
                                                $guard(true, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "[]",
                                                    value: top,
                                                }),
                                        ],
                                        [
                                            (top: any) =>
                                                "object" === typeof top &&
                                                null !== top &&
                                                $au0(top, _path + "[0]", false),
                                            (top: any) =>
                                                top.every(
                                                    (
                                                        elem: any,
                                                        _index3: number,
                                                    ) =>
                                                        (("object" ===
                                                            typeof elem &&
                                                            null !== elem) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                                                value: elem,
                                                            })) &&
                                                        $au0(
                                                            elem,
                                                            _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index3 +
                                                                "]",
                                                            true,
                                                        ),
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "boolean" === typeof top,
                                            (top: any) =>
                                                top.every(
                                                    (
                                                        elem: any,
                                                        _index4: number,
                                                    ) =>
                                                        "boolean" ===
                                                            typeof elem ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index4 +
                                                                "]",
                                                            expected: "boolean",
                                                            value: elem,
                                                        }),
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "number" === typeof top &&
                                                Number.isFinite(top),
                                            (top: any) =>
                                                top.every(
                                                    (
                                                        elem: any,
                                                        _index5: number,
                                                    ) =>
                                                        ("number" ===
                                                            typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            )) ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index5 +
                                                                "]",
                                                            expected: "number",
                                                            value: elem,
                                                        }),
                                                ),
                                        ],
                                    ];
                                    const front = elem[0];
                                    const filtered = tupleList.filter(
                                        (tuple) => true === tuple[0](front),
                                    );
                                    if (1 === filtered.length)
                                        return filtered[0][1](elem);
                                    const array = elem;
                                    if (1 < filtered.length)
                                        for (const tuple of filtered)
                                            if (
                                                array.every(
                                                    (value: any) =>
                                                        true ===
                                                        tuple[0](value),
                                                )
                                            )
                                                return tuple[1](array);
                                    return $guard(_exceptionable, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            '([string, string] | [boolean, number, number] | [] | Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number>)',
                                        value: elem,
                                    });
                                })()) ||
                            ("object" === typeof elem &&
                                null !== elem &&
                                $ao0(elem, _path + "[" + _index1 + "]", true))),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
