import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { IProtobufProperty } from "../../schemas/protobuf/IProtobufProperty";
import { IProtobufPropertyType } from "../../schemas/protobuf/IProtobufPropertyType";
import { IProtobufSchema } from "../../schemas/protobuf/IProtobufSchema";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { MapUtil } from "../../utils/MapUtil";
import { ProtobufNameEncoder } from "../../utils/ProtobufNameEncoder";

export namespace ProtobufMessageProgrammer {
  export interface IProps {
    context: ITypiaContext;
    type: ts.Type;
  }
  export const write = (props: IProps) => {
    // PARSE TARGET TYPE
    const collection: MetadataCollection = new MetadataCollection();
    ProtobufFactory.metadata({
      method: "message",
      checker: props.context.checker,
      transformer: props.context.transformer,
      collection,
      type: props.type,
    });

    // STRINGIFY
    const hierarchies: Map<string, Hierarchy> = new Map();
    for (const object of collection.objects())
      if (is_dynamic_object(object) === false)
        emplace({
          hierarchies,
          object,
        });

    const content: string =
      `syntax = "proto3";\n\n` +
      [...hierarchies.values()]
        .map((hier) => write_hierarchy(hier))
        .join("\n\n");

    // RETURNS
    return ts.factory.createCallExpression(
      IdentifierFactory.access(
        ts.factory.createArrayLiteralExpression(
          content.split("\n").map((str) => ts.factory.createStringLiteral(str)),
          true,
        ),
        "join",
      ),
      undefined,
      [ts.factory.createStringLiteral("\n")],
    );
  };

  const emplace = (props: {
    hierarchies: Map<string, Hierarchy>;
    object: MetadataObjectType;
  }) => {
    let hierarchies: Map<string, Hierarchy> = props.hierarchies;
    const accessors: string[] = props.object.name.split(".");
    accessors.forEach((access, i) => {
      const hierarchy: Hierarchy = MapUtil.take(hierarchies, access, () => ({
        key: access,
        object: null!,
        children: new Map(),
      }));
      hierarchies = hierarchy.children;
      if (i === accessors.length - 1) hierarchy.object = props.object;
    });
  };

  const is_dynamic_object = (object: MetadataObjectType): boolean =>
    object.properties.length === 1 &&
    object.properties[0]!.key.isSoleLiteral() === false;

  const write_hierarchy = (hierarchy: Hierarchy): string => {
    const elements: string[] = [
      `message ${ProtobufNameEncoder.encode(hierarchy.key)} {`,
    ];
    if (hierarchy.object !== null) {
      const text: string = write_object(hierarchy.object);
      elements.push(...text.split("\n").map((str) => `  ${str}`));
    }
    if (hierarchy.children.size)
      elements.push(
        [...hierarchy.children.values()]
          .map((child) => write_hierarchy(child))
          .map((body) =>
            body
              .split("\n")
              .map((line) => `  ${line}`)
              .join("\n"),
          )
          .join("\n\n"),
      );
    elements.push("}");
    return elements.join("\n");
  };

  const write_object = (obj: MetadataObjectType): string => {
    return obj.properties
      .map((p) => {
        if (p.of_protobuf_ === undefined) ProtobufFactory.emplaceObject(obj);
        const schema: IProtobufProperty = p.of_protobuf_!;
        const key: string = p.key.getSoleLiteral()!;
        return decodeProperty({
          key,
          value: p.value,
          union: schema.union,
        });
      })
      .join("\n");
  };

  /* -----------------------------------------------------------
    DECODERS
  ----------------------------------------------------------- */
  const decodeProperty = (props: {
    key: string;
    value: Metadata;
    union: IProtobufPropertyType[];
  }): string => {
    if (props.union.length === 1) {
      const top = props.union[0]!;
      return [
        ...(top.type === "array" || top.type === "map"
          ? []
          : [
              props.value.isRequired() && props.value.nullable === false
                ? "required"
                : "optional",
            ]),
        decodeSchema(top),
        props.key,
        "=",
        `${top.index};`,
      ].join(" ");
    }
    return [
      `oneof ${props.key} {`,
      ...props.union
        .map((type) => `${decodeSchema(type)} v${type.index} = ${type.index};`)
        .map((str) => str.split("\n"))
        .map((str) => `  ${str}`),
      `}`,
    ].join("\n");
  };

  const decodeSchema = (schema: IProtobufSchema): string => {
    if (
      schema.type === "bytes" ||
      schema.type === "bool" ||
      schema.type === "string"
    )
      return schema.type;
    else if (schema.type === "bigint" || schema.type === "number")
      return schema.name;
    else if (schema.type === "array")
      return `repeated ${decodeSchema(schema.value)}`;
    else if (schema.type === "object")
      return ProtobufNameEncoder.encode(schema.object.name);
    // else if (schema.type === "map")
    return `map<${decodeSchema(schema.key)}, ${decodeSchema(schema.value)}>`;
  };
}

interface Hierarchy {
  key: string;
  object: MetadataObjectType | null;
  children: Map<string, Hierarchy>;
}
