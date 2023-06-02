import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { InstanceUnion } from "../../../structures/InstanceUnion";

export const test_assert_InstanceUnion = _test_assert(
    "InstanceUnion",
    InstanceUnion.generate,
    (input) =>
        ((input: any): Array<InstanceUnion.Union> => {
            const __is: any = (
                input: any,
            ): input is Array<InstanceUnion.Union> => {
                const $io0: any = (input: any): boolean =>
                    "object" === typeof input.scale &&
                    null !== input.scale &&
                    "number" === typeof input.scale.x &&
                    Number.isFinite(input.scale.x) &&
                    "number" === typeof input.scale.y &&
                    Number.isFinite(input.scale.y) &&
                    "number" === typeof input.scale.z &&
                    Number.isFinite(input.scale.z) &&
                    "object" === typeof input.position &&
                    null !== input.position &&
                    "number" === typeof input.position.x &&
                    Number.isFinite(input.position.x) &&
                    "number" === typeof input.position.y &&
                    Number.isFinite(input.position.y) &&
                    "number" === typeof input.position.z &&
                    Number.isFinite(input.position.z) &&
                    "object" === typeof input.rotate &&
                    null !== input.rotate &&
                    "number" === typeof input.rotate.x &&
                    Number.isFinite(input.rotate.x) &&
                    "number" === typeof input.rotate.y &&
                    Number.isFinite(input.rotate.y) &&
                    "number" === typeof input.rotate.z &&
                    Number.isFinite(input.rotate.z) &&
                    "object" === typeof input.pivot &&
                    null !== input.pivot &&
                    "number" === typeof input.pivot.x &&
                    Number.isFinite(input.pivot.x) &&
                    "number" === typeof input.pivot.y &&
                    Number.isFinite(input.pivot.y) &&
                    "number" === typeof input.pivot.z &&
                    Number.isFinite(input.pivot.z);
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    "point" === input.type;
                const $io3: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "line" === input.type;
                const $io4: any = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y);
                const $io5: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof input.p3.x &&
                    Number.isFinite(input.p3.x) &&
                    "number" === typeof input.p3.y &&
                    Number.isFinite(input.p3.y) &&
                    "triangle" === input.type;
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof input.p3.x &&
                    Number.isFinite(input.p3.x) &&
                    "number" === typeof input.p3.y &&
                    Number.isFinite(input.p3.y) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    "number" === typeof input.p4.x &&
                    Number.isFinite(input.p4.x) &&
                    "number" === typeof input.p4.y &&
                    Number.isFinite(input.p4.y) &&
                    "rectangle" === input.type;
                const $io7: any = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    ) &&
                    "polyline" === input.type;
                const $io8: any = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io9(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io9(elem),
                    ) &&
                    "polygon" === input.type;
                const $io9: any = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    );
                const $io10: any = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    "number" === typeof input.centroid.x &&
                    Number.isFinite(input.centroid.x) &&
                    "number" === typeof input.centroid.y &&
                    Number.isFinite(input.centroid.y) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius) &&
                    "circle" === input.type;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ("point" === input.type) return $io2(input);
                        if ("line" === input.type) return $io3(input);
                        if ("triangle" === input.type) return $io5(input);
                        if ("rectangle" === input.type) return $io6(input);
                        if ("polyline" === input.type) return $io7(input);
                        if ("polygon" === input.type) return $io8(input);
                        if ("circle" === input.type) return $io10(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            (("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                                elem instanceof Uint8Array ||
                                (elem instanceof Set &&
                                    (() =>
                                        [...elem].every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
                                        ))()) ||
                                elem instanceof Map ||
                                (Array.isArray(elem) &&
                                    (() => {
                                        const array: any = elem;
                                        const tuplePredicators: any = [
                                            [
                                                (top: any[]): any =>
                                                    top.length === 2 &&
                                                    "string" ===
                                                        typeof top[0] &&
                                                    "string" === typeof top[1],
                                                (entire: any[]): any =>
                                                    entire.length === 2 &&
                                                    "string" ===
                                                        typeof entire[0] &&
                                                    "string" ===
                                                        typeof entire[1],
                                            ],
                                            [
                                                (top: any[]): any =>
                                                    top.length === 3 &&
                                                    "boolean" ===
                                                        typeof top[0] &&
                                                    "number" ===
                                                        typeof top[1] &&
                                                    Number.isFinite(top[1]) &&
                                                    "number" ===
                                                        typeof top[2] &&
                                                    Number.isFinite(top[2]),
                                                (entire: any[]): any =>
                                                    entire.length === 3 &&
                                                    "boolean" ===
                                                        typeof entire[0] &&
                                                    "number" ===
                                                        typeof entire[1] &&
                                                    Number.isFinite(
                                                        entire[1],
                                                    ) &&
                                                    "number" ===
                                                        typeof entire[2] &&
                                                    Number.isFinite(entire[2]),
                                            ],
                                            [
                                                (top: any[]): any =>
                                                    top.length === 0,
                                                (entire: any[]): any =>
                                                    entire.length === 0,
                                            ],
                                        ];
                                        for (const pred of tuplePredicators)
                                            if (pred[0](array))
                                                return pred[1](array);
                                        const top: any = array[0];
                                        if (0 === elem.length) return true;
                                        const arrayPredicators: any = [
                                            [
                                                (top: any): any =>
                                                    "object" === typeof top &&
                                                    null !== top &&
                                                    $iu0(top),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (elem: any) =>
                                                            "object" ===
                                                                typeof elem &&
                                                            null !== elem &&
                                                            $iu0(elem),
                                                    ),
                                            ],
                                            [
                                                (top: any): any =>
                                                    "boolean" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (elem: any) =>
                                                            "boolean" ===
                                                            typeof elem,
                                                    ),
                                            ],
                                            [
                                                (top: any): any =>
                                                    "number" === typeof top &&
                                                    Number.isFinite(top),
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (elem: any) =>
                                                            "number" ===
                                                                typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            ),
                                                    ),
                                            ],
                                        ];
                                        const passed: any =
                                            arrayPredicators.filter(
                                                (pred: any) => pred[0](top),
                                            );
                                        if (1 === passed.length)
                                            return passed[0][1](array);
                                        else if (1 < passed.length)
                                            for (const pred of passed)
                                                if (
                                                    array.every(
                                                        (value: any) =>
                                                            true ===
                                                            pred[0](value),
                                                    )
                                                )
                                                    return pred[1](array);
                                        return false;
                                    })()) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem))),
                    )
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<InstanceUnion.Union> => {
                    const $ao0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.scale &&
                            null !== input.scale) ||
                            $guard(_exceptionable, {
                                path: _path + ".scale",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.scale,
                            })) &&
                        $ao1(
                            input.scale,
                            _path + ".scale",
                            true && _exceptionable,
                        ) &&
                        (("object" === typeof input.position &&
                            null !== input.position) ||
                            $guard(_exceptionable, {
                                path: _path + ".position",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.position,
                            })) &&
                        $ao1(
                            input.position,
                            _path + ".position",
                            true && _exceptionable,
                        ) &&
                        (("object" === typeof input.rotate &&
                            null !== input.rotate) ||
                            $guard(_exceptionable, {
                                path: _path + ".rotate",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.rotate,
                            })) &&
                        $ao1(
                            input.rotate,
                            _path + ".rotate",
                            true && _exceptionable,
                        ) &&
                        (("object" === typeof input.pivot &&
                            null !== input.pivot) ||
                            $guard(_exceptionable, {
                                path: _path + ".pivot",
                                expected: "ObjectSimple.IPoint3D",
                                value: input.pivot,
                            })) &&
                        $ao1(
                            input.pivot,
                            _path + ".pivot",
                            true && _exceptionable,
                        );
                    const $ao1: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.x &&
                            Number.isFinite(input.x)) ||
                            $guard(_exceptionable, {
                                path: _path + ".x",
                                expected: "number",
                                value: input.x,
                            })) &&
                        (("number" === typeof input.y &&
                            Number.isFinite(input.y)) ||
                            $guard(_exceptionable, {
                                path: _path + ".y",
                                expected: "number",
                                value: input.y,
                            })) &&
                        (("number" === typeof input.z &&
                            Number.isFinite(input.z)) ||
                            $guard(_exceptionable, {
                                path: _path + ".z",
                                expected: "number",
                                value: input.z,
                            }));
                    const $ao2: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.x &&
                            Number.isFinite(input.x)) ||
                            $guard(_exceptionable, {
                                path: _path + ".x",
                                expected: "number",
                                value: input.x,
                            })) &&
                        (("number" === typeof input.y &&
                            Number.isFinite(input.y)) ||
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
                    const $ao3: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.p1 && null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p1,
                            })) &&
                        $ao4(input.p1, _path + ".p1", true && _exceptionable) &&
                        (("object" === typeof input.p2 && null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p2,
                            })) &&
                        $ao4(input.p2, _path + ".p2", true && _exceptionable) &&
                        ("line" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"line"',
                                value: input.type,
                            }));
                    const $ao4: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("number" === typeof input.x &&
                            Number.isFinite(input.x)) ||
                            $guard(_exceptionable, {
                                path: _path + ".x",
                                expected: "number",
                                value: input.x,
                            })) &&
                        (("number" === typeof input.y &&
                            Number.isFinite(input.y)) ||
                            $guard(_exceptionable, {
                                path: _path + ".y",
                                expected: "number",
                                value: input.y,
                            }));
                    const $ao5: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.p1 && null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p1,
                            })) &&
                        $ao4(input.p1, _path + ".p1", true && _exceptionable) &&
                        (("object" === typeof input.p2 && null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p2,
                            })) &&
                        $ao4(input.p2, _path + ".p2", true && _exceptionable) &&
                        (("object" === typeof input.p3 && null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p3,
                            })) &&
                        $ao4(input.p3, _path + ".p3", true && _exceptionable) &&
                        ("triangle" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"triangle"',
                                value: input.type,
                            }));
                    const $ao6: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.p1 && null !== input.p1) ||
                            $guard(_exceptionable, {
                                path: _path + ".p1",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p1,
                            })) &&
                        $ao4(input.p1, _path + ".p1", true && _exceptionable) &&
                        (("object" === typeof input.p2 && null !== input.p2) ||
                            $guard(_exceptionable, {
                                path: _path + ".p2",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p2,
                            })) &&
                        $ao4(input.p2, _path + ".p2", true && _exceptionable) &&
                        (("object" === typeof input.p3 && null !== input.p3) ||
                            $guard(_exceptionable, {
                                path: _path + ".p3",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p3,
                            })) &&
                        $ao4(input.p3, _path + ".p3", true && _exceptionable) &&
                        (("object" === typeof input.p4 && null !== input.p4) ||
                            $guard(_exceptionable, {
                                path: _path + ".p4",
                                expected: "ObjectUnionExplicit.IPoint",
                                value: input.p4,
                            })) &&
                        $ao4(input.p4, _path + ".p4", true && _exceptionable) &&
                        ("rectangle" === input.type ||
                            $guard(_exceptionable, {
                                path: _path + ".type",
                                expected: '"rectangle"',
                                value: input.type,
                            }));
                    const $ao7: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.points) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected: "Array<ObjectUnionExplicit.IPoint>",
                                value: input.points,
                            })) &&
                        input.points.every(
                            (elem: any, _index6: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index6 + "]",
                                        expected: "ObjectUnionExplicit.IPoint",
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
                    const $ao8: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.outer &&
                            null !== input.outer) ||
                            $guard(_exceptionable, {
                                path: _path + ".outer",
                                expected: "ObjectUnionExplicit.IPolyline",
                                value: input.outer,
                            })) &&
                        $ao9(
                            input.outer,
                            _path + ".outer",
                            true && _exceptionable,
                        ) &&
                        (Array.isArray(input.inner) ||
                            $guard(_exceptionable, {
                                path: _path + ".inner",
                                expected:
                                    "Array<ObjectUnionExplicit.IPolyline>",
                                value: input.inner,
                            })) &&
                        input.inner.every(
                            (elem: any, _index7: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".inner[" + _index7 + "]",
                                        expected:
                                            "ObjectUnionExplicit.IPolyline",
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
                    const $ao9: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (Array.isArray(input.points) ||
                            $guard(_exceptionable, {
                                path: _path + ".points",
                                expected: "Array<ObjectUnionExplicit.IPoint>",
                                value: input.points,
                            })) &&
                        input.points.every(
                            (elem: any, _index8: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".points[" + _index8 + "]",
                                        expected: "ObjectUnionExplicit.IPoint",
                                        value: elem,
                                    })) &&
                                $ao4(
                                    elem,
                                    _path + ".points[" + _index8 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao10: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (("object" === typeof input.centroid &&
                            null !== input.centroid) ||
                            $guard(_exceptionable, {
                                path: _path + ".centroid",
                                expected: "ObjectUnionExplicit.IPoint",
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
                    const $au0: any = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("point" === input.type)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("line" === input.type)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("triangle" === input.type)
                                return $ao5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("rectangle" === input.type)
                                return $ao6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("polyline" === input.type)
                                return $ao7(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("polygon" === input.type)
                                return $ao8(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("circle" === input.type)
                                return $ao10(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
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
                                expected: "InstanceUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (null !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                                        value: elem,
                                    })) &&
                                (undefined !== elem ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<boolean> | Array<number> | Map<any, any> | ObjectSimple.IBox3D | ObjectUnionExplicit | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)",
                                        value: elem,
                                    })) &&
                                (("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                    elem instanceof Uint8Array ||
                                    (elem instanceof Set &&
                                        (() =>
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
                                            ))()) ||
                                    elem instanceof Map ||
                                    (Array.isArray(elem) &&
                                        (() => {
                                            const array: any = elem;
                                            const tuplePredicators: any = [
                                                [
                                                    (top: any[]): any =>
                                                        top.length === 2 &&
                                                        "string" ===
                                                            typeof top[0] &&
                                                        "string" ===
                                                            typeof top[1],
                                                    (entire: any[]): any =>
                                                        (entire.length === 2 ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "[string, string]",
                                                                value: entire,
                                                            })) &&
                                                        ("string" ===
                                                            typeof entire[0] ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][0]",
                                                                expected:
                                                                    "string",
                                                                value: entire[0],
                                                            })) &&
                                                        ("string" ===
                                                            typeof entire[1] ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][1]",
                                                                expected:
                                                                    "string",
                                                                value: entire[1],
                                                            })),
                                                ],
                                                [
                                                    (top: any[]): any =>
                                                        top.length === 3 &&
                                                        "boolean" ===
                                                            typeof top[0] &&
                                                        "number" ===
                                                            typeof top[1] &&
                                                        Number.isFinite(
                                                            top[1],
                                                        ) &&
                                                        "number" ===
                                                            typeof top[2] &&
                                                        Number.isFinite(top[2]),
                                                    (entire: any[]): any =>
                                                        (entire.length === 3 ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "[boolean, number, number]",
                                                                value: entire,
                                                            })) &&
                                                        ("boolean" ===
                                                            typeof entire[0] ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][0]",
                                                                expected:
                                                                    "boolean",
                                                                value: entire[0],
                                                            })) &&
                                                        (("number" ===
                                                            typeof entire[1] &&
                                                            Number.isFinite(
                                                                entire[1],
                                                            )) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][1]",
                                                                expected:
                                                                    "number",
                                                                value: entire[1],
                                                            })) &&
                                                        (("number" ===
                                                            typeof entire[2] &&
                                                            Number.isFinite(
                                                                entire[2],
                                                            )) ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][2]",
                                                                expected:
                                                                    "number",
                                                                value: entire[2],
                                                            })),
                                                ],
                                                [
                                                    (top: any[]): any =>
                                                        top.length === 0,
                                                    (entire: any[]): any =>
                                                        entire.length === 0 ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "]",
                                                            expected: "[]",
                                                            value: entire,
                                                        }),
                                                ],
                                            ];
                                            for (const pred of tuplePredicators)
                                                if (pred[0](array))
                                                    return pred[1](array);
                                            const top: any = array[0];
                                            if (0 === elem.length) return true;
                                            const arrayPredicators: any = [
                                                [
                                                    (top: any): any =>
                                                        "object" ===
                                                            typeof top &&
                                                        null !== top &&
                                                        $au0(
                                                            top,
                                                            _path + "[0]",
                                                            false,
                                                        ),
                                                    (entire: any[]): any =>
                                                        entire.every(
                                                            (
                                                                elem: any,
                                                                _index3: number,
                                                            ) =>
                                                                (("object" ===
                                                                    typeof elem &&
                                                                    null !==
                                                                        elem) ||
                                                                    $guard(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "][" +
                                                                                _index3 +
                                                                                "]",
                                                                            expected:
                                                                                '(ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>)',
                                                                            value: elem,
                                                                        },
                                                                    )) &&
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
                                                    (top: any): any =>
                                                        "boolean" ===
                                                        typeof top,
                                                    (entire: any[]): any =>
                                                        entire.every(
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
                                                                    expected:
                                                                        "boolean",
                                                                    value: elem,
                                                                }),
                                                        ),
                                                ],
                                                [
                                                    (top: any): any =>
                                                        "number" ===
                                                            typeof top &&
                                                        Number.isFinite(top),
                                                    (entire: any[]): any =>
                                                        entire.every(
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
                                                                    expected:
                                                                        "number",
                                                                    value: elem,
                                                                }),
                                                        ),
                                                ],
                                            ];
                                            const passed: any =
                                                arrayPredicators.filter(
                                                    (pred: any) => pred[0](top),
                                                );
                                            if (1 === passed.length)
                                                return passed[0][1](array);
                                            else if (1 < passed.length)
                                                for (const pred of passed)
                                                    if (
                                                        array.every(
                                                            (value: any) =>
                                                                true ===
                                                                pred[0](value),
                                                        )
                                                    )
                                                        return pred[1](array);
                                            return $guard(_exceptionable, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "([string, string] | [boolean, number, number] | [] | ObjectUnionExplicit | Array<boolean> | Array<number>)",
                                                value: elem,
                                            });
                                        })()) ||
                                    ("object" === typeof elem &&
                                        null !== elem &&
                                        $ao0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        ))),
                        )
                    );
                })(input, "$input", true);
            return input;
        })(input),
);
