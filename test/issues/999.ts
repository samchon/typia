import typia from "typia";

namespace Wrapper {
    export type Something = typia.IJsonSchema.INumber;
    export namespace Internal {
        export interface Nothing {}
    }
}

const number: typia.IJsonSchema.INumber = {} as any;
const something: Wrapper.Something = {} as any;
const nothing: Wrapper.Internal.Nothing = {} as any;

typia.is(number);
typia.is(something);
typia.is(nothing);
