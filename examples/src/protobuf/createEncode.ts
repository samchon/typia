import typia, { tags } from "typia";

export const encode = typia.protobuf.createEncode<IMember>();

interface IMember {
  id:
    | (string & tags.Sequence<11>)
    | (number & tags.Type<"uint64"> & tags.Sequence<12>)
    | (Uint8Array & tags.Sequence<13>);
  name: (string & tags.Sequence<20>) | null;
  children: Array<IMember> & tags.Sequence<30>;
  keywords: Map<string, string> & tags.Sequence<40>;
  thumbnail:
    | (string & tags.Format<"uri"> & tags.ContentMediaType<"image/*">)
    | Uint8Array;
  email: string & tags.Format<"email">;
  hobbies: Array<IHobby>;
}
interface IHobby {
  id: string & tags.Format<"uuid">;
  name: string;
  valid: boolean;
}
