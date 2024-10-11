import ts from "typescript";

import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { MapUtil } from "../../utils/MapUtil";
import { NameEncoder } from "../../utils/NameEncoder";

import { ProtobufUtil } from "../helpers/ProtobufUtil";

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
    return ts.factory.createStringLiteral(content);
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
      `message ${NameEncoder.encode(hierarchy.key)} {`,
    ];
    if (hierarchy.object !== null) {
      const text: string = write_object(hierarchy.object);
      elements.push(...text.split("\n").map((str) => `${TAB}${str}`));
    }
    if (hierarchy.children.size)
      elements.push(
        [...hierarchy.children.values()]
          .map((child) => write_hierarchy(child))
          .map((body) =>
            body
              .split("\n")
              .map((line) => `${TAB}${line}`)
              .join("\n"),
          )
          .join("\n\n"),
      );
    elements.push("}");
    return elements.join("\n");
  };

  const write_object = (object: MetadataObjectType): string => {
    const sequence: IPointer<number> = { value: 0 };
    return object.properties
      .map((p) => {
        const key: string = p.key.getSoleLiteral()!;
        const type: string = decode({
          sequence,
          metadata: p.value,
        });
        return type.indexOf("${name}") !== -1
          ? type.replace("${name}", key)
          : `${
              p.value.arrays.length || type.startsWith("map<")
                ? ""
                : !p.value.isRequired() || p.value.nullable
                  ? "optional "
                  : "required "
            }${type} ${key} = ${++sequence.value};`;
      })
      .join("\n");
  };

  /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
  const decode = (props: {
    sequence: IPointer<number>;
    metadata: Metadata;
  }): string => {
    const elements: Set<string> = new Set();
    if (props.metadata.natives.length) elements.add("bytes");
    for (const atomic of ProtobufUtil.getAtomics(props.metadata))
      elements.add(atomic);
    for (const array of props.metadata.arrays)
      elements.add(
        `repeated ${decode({
          sequence: props.sequence,
          metadata: array.type.value,
        })}`,
      );
    for (const obj of props.metadata.objects)
      elements.add(
        is_dynamic_object(obj.type)
          ? decode_map({
              sequence: props.sequence,
              entry: MetadataProperty.create({
                ...obj.type.properties[0]!,
                key: (() => {
                  const key: Metadata = Metadata.initialize();
                  key.atomics.push(
                    MetadataAtomic.create({
                      type: "string",
                      tags: [],
                    }),
                  );
                  return key;
                })(),
              }),
            })
          : NameEncoder.encode(obj.type.name),
      );
    for (const entry of props.metadata.maps)
      elements.add(
        decode_map({
          sequence: props.sequence,
          entry,
        }),
      );
    return elements.size === 1
      ? [...elements][0]!
      : [
          "oneof ${name} {",
          ...[...elements].map((str) => {
            const index: number = ++props.sequence.value;
            return `${TAB}${str} v${index} = ${index};`;
          }),
          "}",
        ].join("\n");
  };

  const decode_map = (props: {
    sequence: IPointer<number>;
    entry: Metadata.Entry;
  }): string =>
    `map<${decode({
      sequence: props.sequence,
      metadata: props.entry.key,
    })}, ${decode({
      sequence: props.sequence,
      metadata: props.entry.value,
    })}>`;
}

interface Hierarchy {
  key: string;
  object: MetadataObjectType | null;
  children: Map<string, Hierarchy>;
}

interface IPointer<T> {
  value: T;
}

const TAB = " ".repeat(2);
