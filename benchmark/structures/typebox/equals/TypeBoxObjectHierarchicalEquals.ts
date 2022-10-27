import { Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const Timestamp = Type.Object(
    {
        time: Type.Number(),
        zone: Type.Number(),
    },
    { additionalProperties: Type.Undefined() },
);

const Channel = Type.Object(
    {
        id: Type.Number(),
        code: Type.String(),
        name: Type.String(),
        sequence: Type.Number(),
        exclusive: Type.Boolean(),
        priority: Type.Number(),
        created_at: Timestamp,
    },
    { additionalProperties: Type.Undefined() },
);

const Account = Type.Object(
    {
        id: Type.Number(),
        code: Type.String(),
        created_at: Timestamp,
    },
    { additionalProperties: Type.Undefined() },
);

const Enterprise = Type.Object(
    {
        id: Type.Number(),
        account: Account,
        name: Type.String(),
        grade: Type.Number(),
        created_at: Timestamp,
    },
    { additionalProperties: Type.Undefined() },
);

const Member = Type.Object(
    {
        id: Type.Number(),
        account: Account,
        enterprise: Type.Union([Type.Null(), Enterprise]),
        emails: Type.Array(Type.String()),
        created_at: Timestamp,
        authorized: Type.Boolean(),
    },
    { additionalProperties: Type.Undefined() },
);

const Customer = Type.Object(
    {
        id: Type.Number(),
        channel: Channel,
        member: Type.Union([Type.Null(), Member]),
        account: Type.Union([Type.Null(), Account]),
        href: Type.String(),
        referrer: Type.String(),
        ip: Type.Tuple([
            Type.Number(),
            Type.Number(),
            Type.Number(),
            Type.Number(),
        ]),
        created_at: Timestamp,
    },
    { additionalProperties: Type.Undefined() },
);

export const __TypeBoxObjectHierarchicalEquals = Customer;
export const TypeBoxObjectHierarchicalEquals = TypeCompiler.Compile(
    __TypeBoxObjectHierarchicalEquals,
);
