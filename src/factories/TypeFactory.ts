import ts from "typescript";

import { TypePredicator } from "../utils/TypePredicator";

import { Resolved } from "../Resolved";

export namespace TypeFactory {
  export const isFunction = (type: ts.Type): boolean =>
    getFunction(type) !== null;

  const getFunction = (type: ts.Type) => {
    const node = type.symbol?.declarations?.[0];
    if (node === undefined) return null;

    return ts.isFunctionLike(node)
      ? node
      : ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node)
        ? ts.isFunctionLike(node.initializer)
          ? node.initializer
          : null
        : null;
  };

  export const getReturnType =
    (checker: ts.TypeChecker) =>
    (type: ts.Type) =>
    (name: string): ts.Type | null => {
      // FIND TO-JSON METHOD
      const symbol: ts.Symbol | undefined = checker.getPropertyOfType(
        type,
        name,
      );
      if (!symbol) return null;
      else if (!symbol.valueDeclaration) return null;

      // GET FUNCTION DECLARATION
      const functor: ts.Type = checker.getTypeOfSymbolAtLocation(
        symbol,
        symbol.valueDeclaration,
      );

      // RETURNS THE RETURN-TYPE
      const signature: ts.Signature | undefined = checker.getSignaturesOfType(
        functor,
        ts.SignatureKind.Call,
      )[0];
      return signature ? signature.getReturnType() : null;
    };

  export const getFullName =
    (checker: ts.TypeChecker) =>
    (type: ts.Type, symbol?: ts.Symbol): string => {
      // PRIMITIVE
      symbol ??= type.aliasSymbol ?? type.symbol;
      if (symbol === undefined) return checker.typeToString(type);

      // UNION OR INTERSECT
      if (
        type.aliasSymbol === undefined &&
        TypePredicator.isUnionOrIntersection(type)
      ) {
        const joiner: string = TypePredicator.isIntersection(type)
          ? " & "
          : " | ";
        return type.types
          .map((child) => getFullName(checker)(child))
          .join(joiner);
      }

      //----
      // SPECIALIZATION
      //----
      const name: string = get_name(symbol);

      // CHECK GENERIC
      const generic: readonly ts.Type[] = type.aliasSymbol
        ? type.aliasTypeArguments || []
        : checker.getTypeArguments(type as ts.TypeReference);
      return generic.length
        ? name === "Promise"
          ? getFullName(checker)(generic[0]!)
          : `${name}<${generic
              .map((child) => getFullName(checker)(child))
              .join(", ")}>`
        : name;
    };

  const explore_name =
    (decl: ts.Node) =>
    (name: string): string =>
      ts.isModuleBlock(decl)
        ? explore_name(decl.parent.parent)(
            `${decl.parent.name.getFullText().trim()}.${name}`,
          )
        : name;

  const get_name = (symbol: ts.Symbol): string => {
    const parent = symbol.getDeclarations()?.[0]?.parent;
    return parent
      ? explore_name(parent)(symbol.escapedName.toString())
      : "__type";
  };

  export const keyword = (
    type:
      | "void"
      | "any"
      | "unknown"
      | "boolean"
      | "number"
      | "bigint"
      | "string",
  ) => {
    return ts.factory.createKeywordTypeNode(
      type === "void"
        ? ts.SyntaxKind.VoidKeyword
        : type === "any"
          ? ts.SyntaxKind.AnyKeyword
          : type === "unknown"
            ? ts.SyntaxKind.UnknownKeyword
            : type === "boolean"
              ? ts.SyntaxKind.BooleanKeyword
              : type === "number"
                ? ts.SyntaxKind.NumberKeyword
                : type === "bigint"
                  ? ts.SyntaxKind.BigIntKeyword
                  : ts.SyntaxKind.StringKeyword,
    );
  };

  export const clone = (type: ts.Type): Resolved<ts.Type> =>
    cloneType(type, 0, new Set());
}

const cloneType = (x: any, depth: number, visited: Set<object>): any => {
  if (x === undefined || depth > 4) return undefined;
  else if (typeof x === "object")
    if (x === null) return null;
    else if (Array.isArray(x))
      return x.map((y) => cloneType(y, depth + 1, visited));
    else {
      visited.add(x);
      const entries = (() => {
        try {
          return Object.entries(x);
        } catch {
          return undefined;
        }
      })();
      if (entries === undefined) return undefined;
      return Object.fromEntries(
        entries
          .filter(
            ([k, y]) =>
              k !== "parent" &&
              typeof y !== "function" &&
              !(typeof y === "object" && y !== null && visited.has(y) === true),
          )
          .map(([k, y]) => {
            // if (typeof y === "object" && y !== null) console.log(k, get_uid(y));
            return [k, cloneType(y, depth + 1, visited)];
          }),
      );
    }
  return x;
};

// function get_uid(obj: object | null | undefined): number {
//   // NO UID EXISTS, THEN ISSUE ONE.
//   if (obj instanceof Object) {
//     if (obj.hasOwnProperty("__get_m_iUID") === false) {
//       const uid: number = ++__s_iUID;
//       Object.defineProperty(obj, "__get_m_iUID", {
//         value: function (): number {
//           return uid;
//         },
//       });
//     }

//     // RETURNS
//     return (obj as IObject).__get_m_iUID();
//   } else if (obj === undefined) return -1;
//   // is null
//   else return 0;
// }

// interface IObject {
//   readonly __get_m_iUID: () => number;
// }
// let __s_iUID: number = 0;
