import ts from "typescript";

import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataObjectType } from "../../../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../../../schemas/metadata/MetadataProperty";

import { Writable } from "../../../typings/Writable";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { CommentFactory } from "../../CommentFactory";
import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { MetadataHelper } from "./MetadataHelper";
import { explore_metadata } from "./explore_metadata";
import { iterate_metadata_coalesce } from "./iterate_metadata_coalesce";

export const emplace_metadata_object = (
  props: IMetadataIteratorProps,
): MetadataObjectType => {
  // EMPLACE OBJECT
  const [obj, newbie] = props.collection.emplace(props.checker, props.type);
  ArrayUtil.add(
    obj.nullables,
    props.metadata.nullable,
    (elem) => elem === props.metadata.nullable,
  );

  if (newbie === false) return obj;

  // PREPARE ASSETS
  const isClass: boolean = props.type.isClass();
  const isProperty = significant(!!props.options.functional);
  const pred: (node: ts.Declaration) => boolean = isClass
    ? (node) => {
        const capsuled: boolean = node
          .getChildren()
          .some((c) =>
            c
              .getChildren()
              .some(
                (n) =>
                  n.kind === ts.SyntaxKind.PrivateKeyword ||
                  n.kind === ts.SyntaxKind.ProtectedKeyword,
              ),
          );
        return capsuled === false && isProperty(node);
      }
    : (node) => isProperty(node);

  const insert = (props: {
    key: Metadata;
    value: Metadata;
    symbol: ts.Symbol | undefined;
    filter?: (doc: ts.JSDocTagInfo) => boolean;
  }): MetadataProperty => {
    // COMMENTS AND TAGS
    const description: string | null = props.symbol
      ? (CommentFactory.description(props.symbol) ?? null)
      : null;
    const jsDocTags: ts.JSDocTagInfo[] = (
      props.symbol?.getJsDocTags() ?? []
    ).filter(props.filter ?? (() => true));

    // THE PROPERTY
    const property: MetadataProperty = MetadataProperty.create({
      key: props.key,
      value: props.value,
      description,
      jsDocTags,
    });
    obj.properties.push(property);
    return property;
  };

  //----
  // REGULAR PROPERTIES
  //----
  for (const symbol of props.type.getApparentProperties()) {
    // CHECK INTERNAL TAG
    if (
      (symbol.getJsDocTags(props.checker) ?? []).find(
        (tag) => tag.name === "internal",
      ) !== undefined
    )
      continue;

    // CHECK NODE IS A FORMAL PROPERTY
    const [node, type] = (() => {
      const node = symbol.getDeclarations()?.[0] as
        | ts.PropertyDeclaration
        | undefined;
      const type: ts.Type | undefined = node
        ? props.checker.getTypeOfSymbolAtLocation(symbol, node)
        : props.checker.getTypeOfPropertyOfType(props.type, symbol.name);
      return [node, type];
    })();
    if ((node && pred(node) === false) || type === undefined) continue;

    // GET EXACT TYPE
    const key: Metadata = MetadataHelper.literal_to_metadata(symbol.name);
    const value: Metadata = explore_metadata({
      ...props,
      type,
      explore: {
        top: false,
        object: obj,
        property: symbol.name,
        parameter: null,
        nested: null,
        aliased: false,
        escaped: false,
        output: false,
      },
      intersected: false,
    });
    Writable(value).optional = (symbol.flags & ts.SymbolFlags.Optional) !== 0;
    insert({
      key,
      value,
      symbol,
    });
  }

  //----
  // DYNAMIC PROPERTIES
  //----
  for (const index of props.checker.getIndexInfosOfType(props.type)) {
    // GET EXACT TYPE
    const analyzer = (type: ts.Type) => (property: {} | null) =>
      explore_metadata({
        ...props,
        type,
        explore: {
          top: false,
          object: obj,
          property,
          parameter: null,
          nested: null,
          aliased: false,
          escaped: false,
          output: false,
        },
        intersected: false,
      });
    const key: Metadata = analyzer(index.keyType)(null);
    const value: Metadata = analyzer(index.type)({});

    if (
      key.atomics.length +
        key.constants.map((c) => c.values.length).reduce((a, b) => a + b, 0) +
        key.templates.length +
        key.natives.filter(
          (native) =>
            native.name === "Boolean" ||
            native.name === "BigInt" ||
            native.name === "Number" ||
            native.name === "String",
        ).length !==
      key.size()
    )
      props.errors.push({
        name: key.getName(),
        explore: {
          top: false,
          object: obj,
          property: "[key]",
          parameter: null,
          nested: null,
          aliased: false,
          escaped: false,
          output: false,
        },
        messages: [],
      });

    // INSERT WITH REQUIRED CONFIGURATION
    insert({
      key,
      value,
      symbol: index.declaration?.parent
        ? props.checker.getSymbolAtLocation(index.declaration.parent)
        : undefined,
      filter: (doc) => doc.name !== "default",
    });
  }
  return obj;
};

const significant = (functional: boolean) =>
  functional
    ? (node: ts.Declaration) => !ts.isAccessor(node)
    : (node: ts.Declaration) =>
        ts.isParameter(node) ||
        ts.isPropertyDeclaration(node) ||
        ts.isPropertyAssignment(node) ||
        ts.isPropertySignature(node) ||
        ts.isTypeLiteralNode(node) ||
        ts.isShorthandPropertyAssignment(node);

const iterate_optional_coalesce = (props: {
  metadata: Metadata;
  type: ts.Type;
}): void => {
  if (props.type.isUnionOrIntersection())
    props.type.types.forEach((child) =>
      iterate_optional_coalesce({
        metadata: props.metadata,
        type: child,
      }),
    );
  else iterate_metadata_coalesce(props);
};
