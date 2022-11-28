import ts from "typescript";

import { Metadata } from "../metadata/Metadata";

import { IProtocolMessage } from "../messages/IProtocolMessage";
import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";
import { emplace_protocol_object } from "./internal/protocols/emplace_protocol_object";

export namespace MessageFactory {
    export const collection = () =>
        new MetadataCollection({
            replace: MetadataCollection.replace,
        });

    export const metadata =
        (checker: ts.TypeChecker) =>
        (collection: MetadataCollection) =>
        (type: ts.Type) =>
            MetadataFactory.generate(checker, collection, type, {
                resolve: false,
                constant: true,
                validate: (meta) => {
                    if (meta.any) throw new Error(ErrorMessages.NO_ANY);
                    else if (meta.functional && meta.size() !== 1)
                        throw new Error(ErrorMessages.NO_FUNCTIONAL);
                    else if (meta.objects.find((o) => o.name === "__Main"))
                        throw new Error();
                },
            });

    export const generate =
        (collection: MetadataCollection) =>
        (dict: Map<string, IProtocolMessage>) =>
        (_metadata: Metadata) => {
            for (const obj of collection.objects())
                emplace_protocol_object(collection)(dict)(obj);
        };
}

const enum ErrorMessages {
    NO_ANY = `Error on TSON.message(): any type is not supported in protocol buffer.`,
    NO_FUNCTIONAL = `Error on TSON.message(): functional type is not supported in protocol buffer.`,
    RESERVED = `Error on TSON.message(): reserved type "__Main" has been detected.`,
}
