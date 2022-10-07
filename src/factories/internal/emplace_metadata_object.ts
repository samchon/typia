import ts from "typescript";

import { Metadata } from "../../metadata/Metadata";
import { MetadataObject } from "../../metadata/MetadataObject";
import { MetadataProperty } from "../../metadata/MetadataProperty";

import { Writable } from "../../typings/Writable";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { CommentFactory } from "../CommentFactory";
import { MetadataCollection } from "../MetadataCollection";
import { MetadataFactory } from "../MetadataFactory";
import { MetadataTagFactory } from "../MetadataTagFactory";
import { MetadataHelper } from "./MetadataHelper";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_object =
    (checker: ts.TypeChecker) =>
    (options: MetadataFactory.IOptions) =>
    (collection: MetadataCollection) =>
    (parent: ts.Type, nullable: boolean): MetadataObject => {
        // EMPLACE OBJECT
        const [obj, newbie] = collection.emplace(checker, parent);
        ArrayUtil.add(obj.nullables, nullable, (elem) => elem === nullable);
        if (newbie === false) return obj;

        // PREPARE ASSETS
        const isClass: boolean = parent.isClass();
        const pred: (node: ts.Declaration) => boolean = isClass
            ? (node) => ts.isParameter(node) || ts.isPropertyDeclaration(node)
            : (node) =>
                  ts.isPropertyDeclaration(node) ||
                  ts.isPropertyAssignment(node) ||
                  ts.isPropertySignature(node) ||
                  ts.isTypeLiteralNode(node);

        const insert =
            (key: Metadata) =>
            (value: Metadata) =>
            (identifier: () => string) =>
            (
                symbol: ts.Symbol | undefined,
                filter?: (doc: ts.JSDocTagInfo) => boolean,
            ): MetadataProperty => {
                // COMMENTS AND TAGS
                const description: string | undefined =
                    CommentFactory.generate(
                        symbol?.getDocumentationComment(checker) || [],
                    ) || undefined;
                const jsDocTags: ts.JSDocTagInfo[] = (
                    symbol?.getJsDocTags() || []
                ).filter(filter || (() => true));

                // THE PROPERTY
                const property = MetadataProperty.create({
                    key,
                    value,
                    description,
                    jsDocTags,
                    tags: MetadataTagFactory.generate(
                        () => identifier(),
                        value,
                        jsDocTags,
                    ),
                });
                obj.properties.push(property);
                return property;
            };

        //----
        // REGULAR PROPERTIES
        //----
        for (const prop of parent.getProperties()) {
            // CHECK NODE IS A FORMAL PROPERTY
            const node: ts.PropertyDeclaration | undefined =
                (prop.getDeclarations() || [])[0] as
                    | ts.PropertyDeclaration
                    | undefined;

            if (!node || !pred(node)) continue;

            // CHECK NOT PRIVATE OR PROTECTED MEMBER
            if (isClass) {
                const kind: ts.SyntaxKind | undefined = node
                    .getChildren()[0]
                    ?.getChildren()[0]?.kind;
                if (
                    kind === ts.SyntaxKind.PrivateKeyword ||
                    kind === ts.SyntaxKind.ProtectedKeyword
                )
                    continue;
            }

            // GET EXACT TYPE
            const type: ts.Type = checker.getTypeOfSymbolAtLocation(prop, node);
            const key: Metadata = MetadataHelper.literal_to_metadata(prop.name);
            const value: Metadata = explore_metadata(checker)(options)(
                collection,
            )(type, false);

            // INSERT WITH REQUIRED CONFIGURATION
            if (node.questionToken) Writable(value).required = false;
            insert(key)(value)(() => `${obj.name}.${prop.name}`)(prop);
        }

        //----
        // DYNAMIC PROPERTIES
        //----
        for (const index of checker.getIndexInfosOfType(parent)) {
            // GET EXACT TYPE
            const analyzer = (type: ts.Type) =>
                explore_metadata(checker)(options)(collection)(type, false);
            const key: Metadata = analyzer(index.keyType);
            const value: Metadata = analyzer(index.type);

            // INSERT WITH REQUIRED CONFIGURATION
            insert(key)(value)(() => `${obj.name}[${key.getName()}]`)(
                index.declaration?.parent
                    ? checker.getSymbolAtLocation(index.declaration.parent)
                    : undefined,
                (doc) => doc.name !== "default",
            );
        }

        return obj;
    };
