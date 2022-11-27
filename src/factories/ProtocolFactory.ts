// import { Metadata } from "../metadata/Metadata";
// import { MetadataObject } from "../metadata/MetadataObject";
// import { MetadataProperty } from "../metadata/MetadataProperty";

// import { IProtocolMessage } from "../messages/IProtocolMessage";
// import { IProtocolProperty } from "../messages/IProtocolProperty";
// import { MetadataCollection } from "./MetadataCollection";

// export namespace ProtocolFactory {
//     export const generate =
//         (collection: MetadataCollection) =>
//         (meta: Metadata): IProtocolMessage[] => {};

//     const generate_object =
//         (messages: IProtocolMessage[]) =>
//         (obj: MetadataObject): IProtocolMessage => ({
//             name: obj.name,
//             properties: obj.properties.map((prop) =>
//                 generate_property(messages)(prop),
//             ),
//         });

//     const generate_property =
//         (messages: IProtocolMessage[]) =>
//         (property: MetadataProperty): IProtocolProperty => {
//             const key: string = property.key.getSoleLiteral()!;
//             const value: Metadata = property.value;
//         };
// }

// const size = (meta: Metadata) =>
//     meta.atomics.length +
//     meta.constants.length +
//     (meta.templates.length ? 1 : 0) +
//     meta.arrays.length +
//     meta.tuples.length +
//     meta.objects.length +
//     nativeSize(meta.natives);

// const nativeSize = (natives: string[]) =>
//     (natives.filter((str) => BINARIES.has(str)).length ? 1 : 0) +
//     natives.filter((str) => !BINARIES.has(str)).length;

// const BINARIES: Set<string> = new Set([
//     "Uint8Array",
//     "Uint16Array",
//     "Uint32Array",
//     "BigUint64Array",
//     "Int8Array",
//     "Int16Array",
//     "Int32Array",
//     "BigInt64Array",
//     "Float32Array",
//     "Float64Array",
//     "Buffer",
//     "ArrayBuffer",
//     "DataView",
// ]);
