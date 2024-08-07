import ts from "typescript";

export namespace TypePredicator {
  export const isLiteral = (type: ts.Type): type is ts.LiteralType =>
    !!(
      type.flags &
      (ts.TypeFlags.EnumLiteral |
        ts.TypeFlags.StringLiteral |
        ts.TypeFlags.NumberLiteral |
        ts.TypeFlags.BigIntLiteral)
    );

  export const isTypeParameter = (type: ts.Type): type is ts.TypeParameter =>
    !!(type.flags & ts.TypeFlags.TypeParameter);

  export const isIntersection = (type: ts.Type): type is ts.IntersectionType =>
    !!(type.flags & ts.TypeFlags.Intersection);

  export const isUnion = (type: ts.Type): type is ts.UnionType =>
    !!(type.flags & ts.TypeFlags.Union);

  export const isUnionOrIntersection = (
    type: ts.Type,
  ): type is ts.UnionOrIntersectionType =>
    !!(type.flags & ts.TypeFlags.UnionOrIntersection);

  export const isClass = (type: ts.Type): type is ts.InterfaceType =>
    !!(ts.getObjectFlags(type) & ts.ObjectFlags.Class);

  export const isInterfaceOrClass = (type: ts.Type): type is ts.InterfaceType =>
    !!(ts.getObjectFlags(type) & ts.ObjectFlags.ClassOrInterface);
}
