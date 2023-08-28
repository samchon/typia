import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObject } from "../../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../../schemas/metadata/MetadataProperty";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { CommentFactory } from "../../CommentFactory";
import { MetadataCollection } from "../../MetadataCollection";
import { MetadataFactory } from "../../MetadataFactory";
import { MetadataHelper } from "./MetadataHelper";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_object =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (errors: MetadataFactory.IError[]) =>
    (parent: ts.Type, nullable: boolean): MetadataObject => {
        // EMPLACE OBJECT
        const [obj, newbie] = collection.emplace(checker, parent);
        ArrayUtil.add(obj.nullables, nullable, (elem) => elem === nullable);

        if (newbie === false) return obj;

        // PREPARE ASSETS
        const isClass: boolean = parent.isClass();
        const pred: (node: ts.Declaration) => boolean = isClass
            ? (node) => {
                  const kind: ts.SyntaxKind | undefined = node
                      .getChildren()[0]
                      ?.getChildren()[0]?.kind;
                  return (
                      kind !== ts.SyntaxKind.PrivateKeyword &&
                      kind !== ts.SyntaxKind.ProtectedKeyword &&
                      (ts.isParameter(node) || isProperty(node))
                  );
              }
            : (node) => isProperty(node);

        const insert =
            (key: Metadata) =>
            (value: Metadata) =>
            (
                symbol: ts.Symbol | undefined,
                filter?: (doc: ts.JSDocTagInfo) => boolean,
            ): MetadataProperty => {
                // COMMENTS AND TAGS
                const description: string | null = symbol
                    ? CommentFactory.description(symbol) ?? null
                    : null;
                const jsDocTags: ts.JSDocTagInfo[] = (
                    symbol?.getJsDocTags() ?? []
                ).filter(filter ?? (() => true));

                // THE PROPERTY
                const property = MetadataProperty.create({
                    key,
                    value,
                    description,
                    jsDocTags,
                });
                obj.properties.push(property);
                return property;
            };

        //----
        // REGULAR PROPERTIES
        //----
        for (const prop of parent.getApparentProperties()) {
            // CHECK INTERNAL TAG
            if (
                (prop.getJsDocTags(checker) ?? []).find(
                    (tag) => tag.name === "internal",
                ) !== undefined
            )
                continue;

            // CHECK NODE IS A FORMAL PROPERTY
            const [node, type] = (() => {
                const node = (prop.getDeclarations() ?? [])[0] as
                    | ts.PropertyDeclaration
                    | undefined;
                const type: ts.Type | undefined = node
                    ? checker.getTypeOfSymbolAtLocation(prop, node)
                    : "getTypeOfPropertyOfType" in checker
                    ? (checker as any).getTypeOfPropertyOfType(
                          parent,
                          prop.name,
                      )
                    : undefined;
                return [node, type];
            })();
            if ((node && pred(node) === false) || type === undefined) continue;

            // GET EXACT TYPE
            const key: Metadata = MetadataHelper.literal_to_metadata(prop.name);
            const value: Metadata = explore_metadata(checker)(options)(
                collection,
            )(errors)(type, {
                top: false,
                object: obj,
                property: prop.name,
                nested: null,
                escaped: false,
                aliased: false,
            });

            // OPTIONAL, BUT CAN BE RQUIRED BY `Required<T>` TYPE
            if (node?.questionToken) Writable(value).optional = true;
            insert(key)(value)(prop);
        }

        //----
        // DYNAMIC PROPERTIES
        //----
        for (const index of checker.getIndexInfosOfType(parent)) {
            // GET EXACT TYPE
            const analyzer = (type: ts.Type) => (property: {} | null) =>
                explore_metadata(checker)(options)(collection)(errors)(type, {
                    top: false,
                    object: obj,
                    property,
                    nested: null,
                    escaped: false,
                    aliased: false,
                });
            const key: Metadata = analyzer(index.keyType)(null);
            const value: Metadata = analyzer(index.type)({});

            // INSERT WITH REQUIRED CONFIGURATION
            insert(key)(value)(
                index.declaration?.parent
                    ? checker.getSymbolAtLocation(index.declaration.parent)
                    : undefined,
                (doc) => doc.name !== "default",
            );
        }

        return obj;
    };

const isProperty = (node: ts.Declaration) =>
    ts.isPropertyDeclaration(node) ||
    ts.isPropertyAssignment(node) ||
    ts.isPropertySignature(node) ||
    ts.isTypeLiteralNode(node);
