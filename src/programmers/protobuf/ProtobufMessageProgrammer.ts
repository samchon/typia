import ts from "typescript";

import { MetadataCollection } from "../../factories/MetadataCollection";
import { ProtobufFactory } from "../../factories/ProtobufFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataProperty } from "../../schemas/metadata/MetadataProperty";

import { IProject } from "../../transformers/IProject";

import { MapUtil } from "../../utils/MapUtil";
import { NameEncoder } from "../../utils/NameEncoder";

import { ProtobufUtil } from "../helpers/ProtobufUtil";

export namespace ProtobufMessageProgrammer {
    export const write =
        ({ checker }: IProject) =>
        (type: ts.Type) => {
            // PARSE TARGET TYPE
            const collection: MetadataCollection = new MetadataCollection();
            ProtobufFactory.metadata("message")(checker)(collection)(type);

            // STRINGIFY
            const hierarchies: Map<string, Hierarchy> = new Map();
            for (const obj of collection.objects())
                if (is_dynamic_object(obj) === false) emplace(hierarchies)(obj);

            const content: string =
                `syntax = "proto3";\n\n` +
                [...hierarchies.values()]
                    .map((hier) => write_hierarchy(hier))
                    .join("\n\n");

            // RETURNS
            return ts.factory.createStringLiteral(content);
        };

    const emplace = (dict: Map<string, Hierarchy>) => (obj: MetadataObject) => {
        const accessors: string[] = obj.name.split(".");
        accessors.forEach((access, i) => {
            const hierarchy: Hierarchy = MapUtil.take(dict)(access, () => ({
                key: access,
                object: null!,
                children: new Map(),
            }));
            dict = hierarchy.children;
            if (i === accessors.length - 1) hierarchy.object = obj;
        });
    };

    const is_dynamic_object = (obj: MetadataObject): boolean =>
        obj.properties.length === 1 &&
        obj.properties[0]!.key.isSoleLiteral() === false;

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

    const write_object = (obj: MetadataObject): string => {
        const ptr: IPointer<number> = { value: 0 };
        return obj.properties
            .map((prop) => {
                const key: string = prop.key.getSoleLiteral()!;
                const type: string = decode(ptr)(prop.value);
                return type.indexOf("${name}") !== -1
                    ? type.replace("${name}", key)
                    : `${
                          prop.value.arrays.length || type.startsWith("map<")
                              ? ""
                              : !prop.value.isRequired() || prop.value.nullable
                              ? "optional "
                              : "required "
                      }${type} ${key} = ${++ptr.value};`;
            })
            .join("\n");
    };

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    const decode =
        (ptr: IPointer<number>) =>
        (meta: Metadata): string => {
            const elements: Set<string> = new Set();
            if (meta.natives.length) elements.add("bytes");
            for (const atomic of ProtobufUtil.getAtomics(meta))
                elements.add(atomic);
            for (const array of meta.arrays)
                elements.add(`repeated ${decode(ptr)(array.type.value)}`);
            for (const obj of meta.objects)
                elements.add(
                    is_dynamic_object(obj)
                        ? decode_map(ptr)(
                              MetadataProperty.create({
                                  ...obj.properties[0]!,
                                  key: (() => {
                                      const key: Metadata =
                                          Metadata.initialize();
                                      key.atomics.push(
                                          MetadataAtomic.create({
                                              type: "string",
                                              tags: [],
                                          }),
                                      );
                                      return key;
                                  })(),
                              }),
                          )
                        : NameEncoder.encode(obj.name),
                );
            for (const map of meta.maps) elements.add(decode_map(ptr)(map));
            return elements.size === 1
                ? [...elements][0]!
                : [
                      "oneof ${name} {",
                      ...[...elements].map(
                          (str) =>
                              `${TAB}${str} v${
                                  ptr.value + 1
                              } = ${++ptr.value};`,
                      ),
                      "}",
                  ].join("\n");
        };

    const decode_map =
        (ptr: IPointer<number>) =>
        (prop: Metadata.Entry): string =>
            `map<${decode(ptr)(prop.key)}, ${decode(ptr)(prop.value)}>`;
}

interface Hierarchy {
    key: string;
    object: MetadataObject | null;
    children: Map<string, Hierarchy>;
}

interface IPointer<T> {
    value: T;
}

const TAB = " ".repeat(4);
