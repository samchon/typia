import ts from "typescript";

import { Metadata } from "../metadata/Metadata";

import { IProtocolMessage } from "../messages/IProtocolMessage";
import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";
import { emplace_protocol_object } from "./internal/protocols/emplace_protocol_object";
import { iterate_protocol_main } from "./internal/protocols/iterate_protocol_main";

export namespace ProtocolFactory {
    export const metadata =
        (checker: ts.TypeChecker) =>
        (collection: MetadataCollection) =>
        (type: ts.Type) =>
            MetadataFactory.analyze(checker)({
                resolve: false,
                constant: true,
                absorb: true,
                validate: (meta) => {
                    if (meta.any) throw new Error(ErrorMessages.NO_ANY);
                    else if (meta.functional && meta.size() !== 1)
                        throw new Error(ErrorMessages.NO_FUNCTIONAL);
                    else if (meta.objects.find((o) => o.name === "__Main"))
                        throw new Error(ErrorMessages.NO_MAIN);
                    else if (meta.objects.find((o) => o.name === "__Timestamp"))
                        throw new Error(ErrorMessages.NO_TIMESTAMP);
                    else if (
                        meta.objects.some((o) =>
                            o.properties.some((p) => !is_atomic_key(p.key)),
                        ) ||
                        meta.maps.some((m) => !is_atomic_key(m.key))
                    )
                        throw new Error(ErrorMessages.NOT_ALLOWED_KEY);
                },
            })(collection)(type);

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

    const is_atomic_key = (key: Metadata) => {
        if (
            key.required &&
            key.nullable === false &&
            key.functional === false &&
            key.resolved === null &&
            key.size() ===
                key.atomics.length +
                    key.constants
                        .map((c) => c.values.length)
                        .reduce((a, b) => a + b, 0) +
                    key.templates.length
        ) {
            const set: Set<string> = new Set();
            for (const atomic of key.atomics) set.add(atomic);
            for (const constant of key.constants) set.add(constant.type);
            if (key.templates.length) set.add("string");

            return set.size === 1;
        }
        return false;
    };
}

const enum ErrorMessages {
    NO_ANY = `Error on typia.message(): any type is not supported in protocol buffer.`,
    NO_FUNCTIONAL = `Error on typia.message(): functional type is not supported in protocol buffer.`,
    NO_MAIN = `Error on typia.message(): reserved type "__Main" has been detected.`,
    NO_TIMESTAMP = `Error on typia.message(): reserved type "__Timestamp" has been detected.`,
    NOT_ALLOWED_KEY = `Error on typia.message(): only atomic key type is supported in protocol buffer.`,
}
