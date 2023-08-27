// import typia from "../../src";

// export interface TypeTagTemplate {
//     key: `server-${TypeTagTemplate.Port}-${string & typia.tags.Format<"date">}`;
//     port: TypeTagTemplate.Port;
//     local: `http://${TypeTagTemplate.Ip}:${TypeTagTemplate.Port}`;
//     remote: string & typia.tags.Format<"url">;
// }
// export namespace TypeTagTemplate {
//     export type Ip = string &
//         typia.tags.Format<"ipv4"> &
//         typia.tags.Format<"ipv6">;
//     export type Port = number &
//         typia.tags.Type<"uint32"> &
//         typia.tags.Maximum<65535>;

//     export const generate = (): TypeTagTemplate => ({
//         key: `server-${37000}-${"2023-08-27"}`,
//         port: `${37000}`,
//         local: `http://127.0.0.1:37000`,
//         remote: `https://github.com/samchon/typia`,
//     });
// }
