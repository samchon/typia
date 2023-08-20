import pjs from "protobufjs";

export const _test_protobuf_encode =
    <T extends object>(factory: {
        constructor: { name: string };
        generate(): T;
    }) =>
    (functor: { message: string; encode: (input: T) => Uint8Array }) =>
    () => {
        const data: T = factory.generate();
        const result: Uint8Array = (() => {
            try {
                return functor.encode(data);
            } catch (exp) {
                console.log((exp as any)?.message);
                throw new Error(
                    `Bug on typia.protobuf.encode(): failed to encode ${factory.constructor.name} type.`,
                );
            }
        })();

        if (
            functor.message.indexOf("oneof") === -1 &&
            functor.message.indexOf("int64") === -1
        ) {
            const exected: Uint8Array = google(functor.message)(data);
            if (
                result.length !== exected.length &&
                result.some((byte, i) => byte !== exected[i])
            ) {
                console.log(result.length, exected.length);
                throw new Error(
                    `Bug on typia.protobuf.encode(): invalid encoding happened on ${factory.constructor.name} type.`,
                );
            }
        }
    };

const google =
    (message: string) =>
    <T extends object>(data: T): Uint8Array => {
        const name: string = (() => {
            const getter = (str: string) =>
                str.split("message ")[1].split(" {")[0];
            const lines: string[] = message.split("\n").slice(2);
            const title: string = getter(lines[0]);
            return lines[1].indexOf("message") === -1
                ? title
                : `${title}.${getter(lines[1])}`;
        })();
        const result: pjs.IParserResult = pjs.parse(message, {
            keepCase: true,
        });
        const top: pjs.Type = result.root.lookupType(name);
        return top.encode(data).finish();
    };
