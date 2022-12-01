import ts from "typescript";

import { Metadata } from "../metadata/Metadata";

import { IProtocolMessage } from "../messages/IProtocolMessage";
import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";
import { emplace_protocol_object } from "./internal/protocols/emplace_protocol_object";
import { iterate_protocol_main } from "./internal/protocols/iterate_protocol_main";

export namespace ProtocolFactory {
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
                        throw new Error(ErrorMessages.NO_MAIN);
                    else if (meta.objects.find((o) => o.name === "_Timestamp"))
                        throw new Error(ErrorMessages.NO_TIMESTAMP);
                    else if (
                        meta.objects.some(
                            (o) =>
                                o.properties.filter((p) =>
                                    p.key.isSoleLiteral(),
                                ).length &&
                                o.properties.filter(
                                    (p) => !p.key.isSoleLiteral(),
                                ).length,
                        )
                    )
                        throw new Error(ErrorMessages.NO_SIMULATENOUS);
                    else if (
                        meta.objects.some((o) =>
                            o.properties.some((p) => !is_atomic_key(p.key)),
                        ) ||
                        meta.maps.some((m) => !is_atomic_key(m.key))
                    )
                        throw new Error(ErrorMessages.NOT_ALLOWED_KEY);
                },
            });

    export const generate =
        (collection: MetadataCollection) =>
        (dict: Map<string, IProtocolMessage>) =>
        (meta: Metadata) => {
            // EMPLACE OBJECTS
            for (const obj of collection.objects())
                emplace_protocol_object(dict)(obj);

            // WHEN NOT OBJECT, WRAP IT INTO A FAKE MAIN OBJECT
            iterate_protocol_main(dict)(meta);
        };

    const is_atomic_key = (key: Metadata) =>
        key.required &&
        key.nullable === false &&
        key.functional === false &&
        key.resolved === null &&
        key.size() ===
            key.atomics.length +
                key.constants
                    .map((c) => c.values.length)
                    .reduce((a, b) => a + b, 0);
}

const enum ErrorMessages {
    NO_ANY = `Error on TSON.message(): any type is not supported in protocol buffer.`,
    NO_FUNCTIONAL = `Error on TSON.message(): functional type is not supported in protocol buffer.`,
    NO_MAIN = `Error on TSON.message(): reserved type "__Main" has been detected.`,
    NO_TIMESTAMP = `Error on TSON.message(): reserved type "__Timestamp" has been detected.`,
    NOT_ALLOWED_KEY = `Error on TSON.message(): only atomic key type is supported in protocol buffer.`,
    NO_SIMULATENOUS = `Error on TSON.message(): object can't have both regular and dynamic properties in protocol buffer.`,
}
