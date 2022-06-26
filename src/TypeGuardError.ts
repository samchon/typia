export class TypeGuardError extends Error {
    public constructor(
        public readonly method: string,
        public readonly path: string,
        public readonly value: any,
        message: string = `Error on TSON.${method}(): invalid type - ${path}.`,
    ) {
        super(message);

        // INHERITANCE POLYFILL
        const proto = new.target.prototype;
        if (Object.setPrototypeOf) Object.setPrototypeOf(this, proto);
        else (this as any).__proto__ = proto;
    }
}
