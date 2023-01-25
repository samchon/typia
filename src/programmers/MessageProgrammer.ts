import ts from "typescript";

import { MetadataCollection } from "../factories/MetadataCollection";
import { ProtocolFactory } from "../factories/ProtocolFactory";

import { Metadata } from "../metadata/Metadata";

import { IProject } from "../transformers/IProject";

import { Escaper } from "../utils/Escaper";
import { MapUtil } from "../utils/MapUtil";
import { NameEncoder } from "../utils/NameEncoder";

import { IProtocolMap } from "../messages/IProtocolMap";
import { IProtocolMessage } from "../messages/IProtocolMessage";

export namespace MessageProgrammer {
    export const generate =
        ({ checker }: IProject) =>
        (type: ts.Type) => {
            // PARSE TARGET TYPE
            const collection: MetadataCollection = new MetadataCollection();
            const metadata: Metadata =
                ProtocolFactory.metadata(checker)(collection)(type);

            // CONVERT TO PROTOCOL MESSAGES
            const dict: Map<string, IProtocolMessage> = new Map();
            ProtocolFactory.generate(collection)(dict)(metadata);

            // STRINGIFY
            const hierarchies: Map<string, Hierarchy> = new Map();
            for (const msg of dict.values()) emplace(hierarchies)(msg);

            const content: string =
                `syntax = "proto3";\n\n` +
                [...hierarchies.values()]
                    .map((hier) => stringify(hier))
                    .join("\n\n");

            // RETURNS
            return ts.factory.createStringLiteral(content);
        };

    const stringify = (hierarchy: Hierarchy): string => {
        const { key, message, children } = hierarchy;
        let index: number = 1;

        const elements: string[] = [`message ${NameEncoder.encode(key)} {`];
        if (message !== null)
            elements.push(
                ...message.properties.map((property) => {
                    const key: string =
                        Escaper.variable(property.key) &&
                        property.key.indexOf("$") === -1
                            ? property.key
                            : `v${index + 1}`;
                    if (property.oneOf.length === 1)
                        return [
                            TAB,
                            property.required ? "" : "optional ",
                            property.repeated ? "repeated " : "",
                            getTypeName(property.oneOf[0]!.type) + " ",
                            key,
                            " = ",
                            `${index++};`,
                        ].join("");
                    return (
                        `${TAB}oneof ${key} {\n` +
                        property.oneOf
                            .map(
                                (o, i) =>
                                    `${TAB}${TAB}${getTypeName(
                                        o.type,
                                    )} ${key}_o${i} = ${index++};`,
                            )
                            .join("\n") +
                        `\n${TAB}}`
                    );
                }),
            );
        if (message !== null && children.size) elements.push("\n");
        if (children.size)
            elements.push(
                [...children.values()]
                    .map((child) => stringify(child))
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

    const emplace =
        (dict: Map<string, Hierarchy>) => (message: IProtocolMessage) => {
            const accessors: string[] = message.name.split(".");
            accessors.forEach((access, i) => {
                const hierarchy: Hierarchy = MapUtil.take(dict, access, () => ({
                    key: access,
                    message: null!,
                    children: new Map(),
                }));
                dict = hierarchy.children;
                if (i === accessors.length - 1) hierarchy.message = message;
            });
        };

    function getTypeName(type: string | IProtocolMap): string {
        return typeof type === "string"
            ? NameEncoder.encode(type)
            : `map<${type.key}, ${getTypeName(type.value)}>`;
    }
}

interface Hierarchy {
    key: string;
    message: IProtocolMessage | null;
    children: Map<string, Hierarchy>;
}

const TAB = " ".repeat(4);
