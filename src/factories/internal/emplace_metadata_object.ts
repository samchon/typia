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
                  ts.isPropertyAssignment(node) ||
                  ts.isPropertySignature(node) ||
                  ts.isTypeLiteralNode(node);

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
            const key: string = prop.name;
            const type: ts.Type = checker.getTypeOfSymbolAtLocation(prop, node);

            // CHILD METADATA BY ADDITIONAL EXPLORATION
            const child: Metadata = explore_metadata(checker)(options)(
                collection,
            )(type, false);
            if (node.questionToken) Writable(child).required = false;

            // ADD TO OBJECT PROPERTY
            const property = MetadataProperty.create({
                key: MetadataHelper.literal_to_metadata(key),
                value: child,
                description:
                    CommentFactory.generate(
                        prop.getDocumentationComment(checker),
                    ) || undefined,
            });
            obj.properties.push(property);

            // ASSIGN TAGS
            property.tags.push(
                ...MetadataTagFactory.generate(
                    () => `${obj.name}.${key}`,
                    child,
                    prop.getJsDocTags(),
                ),
            );
            property.jsDocTags.push(...prop.getJsDocTags());
        }
        return obj;
    };
