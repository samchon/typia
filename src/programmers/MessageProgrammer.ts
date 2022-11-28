import ts from "typescript";

import { MessageFactory } from "../factories/MessageFactory";
import { MetadataCollection } from "../factories/MetadataCollection";

import { Metadata } from "../metadata/Metadata";

import { IProject } from "../transformers/IProject";

import { MapUtil } from "../utils/MapUtil";

import { IProtocolMessage } from "../messages/IProtocolMessage";

export namespace MessageProgrammer {
    export const generate =
        ({ checker }: IProject) =>
        (type: ts.Type) => {
            // PARSE TARGET TYPE
            const collection: MetadataCollection = MessageFactory.collection();
            const metadata: Metadata =
                MessageFactory.metadata(checker)(collection)(type);

            // CONVERT TO PROTOCOL MESSAGES
            const dict: Map<string, IProtocolMessage> = new Map();
            MessageFactory.generate(collection)(dict)(metadata);

            // STRINGIFY
            const hierarchies: Map<string, Hierarchy> = new Map();
            for (const msg of dict.values()) emplace(hierarchies)(msg);

            const content: string =
                `syntax = "proto3";\n\n` +
                [...hierarchies.values()]
                    .map((hier) => stringify(hier, 0))
                    .join("\n\n");

            // RETURNS
            return ts.factory.createStringLiteral(content);
        };

    const stringify = (hierarchy: Hierarchy, level: number): string => {
        const { key, message, children } = hierarchy;
        let index: number = 1;

        const elements: string[] = [`message ${key} {`];
        if (message !== null)
            elements.push(
                ...message.properties.map((property) => {
                    if (property.oneOf.length === 1)
                        return [
                            TAB,
                            property.required ? "" : "optional",
                            property.oneOf[0]!.repeat ? "repeat" : "",
                            property.oneOf[0]!.type,
                            property.key,
                            "=",
                            `${index++};`,
                        ].join(" ");
                    return (
                        `${TAB}oneof ${property.key}\n` +
                        property.oneOf.map(
                            (o, i) =>
                                `${TAB}${TAB}${o.type} o${i} = ${index++};\n`,
                        ) +
                        `\n${TAB}}`
                    );
                }),
            );
        if (message !== null && children.size) elements.push("\n");
        if (children.size)
            elements.push(
                ...[...children.values()]
                    .map((child) => stringify(child, level + 1))
                    .join("\n\n")
                    .split("\n"),
            );
        elements.push("}");

        return level === 0
            ? elements.join("\n")
            : elements.map((line) => `${TAB.repeat(level)}${line}`).join("\n");
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
}

interface Hierarchy {
    key: string;
    message: IProtocolMessage | null;
    children: Map<string, Hierarchy>;
}

const TAB = " ".repeat(4);
