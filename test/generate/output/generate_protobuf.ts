import typia, { tags } from "typia";
interface IFile {
    name: string & tags.MaxLength<8>;
    extension: null | (string & tags.MinLength<1> & tags.MaxLength<3>);
    size: number & tags.Type<"uint32">;
    data: Uint8Array;
}
export const createEncode = typia.protobuf.createEncode<IFile>();
export const createAssertEncode = typia.protobuf.createAssertEncode<IFile>();
export const createIsEncode = typia.protobuf.createIsEncode<IFile>();
export const createValidateEncode = typia.protobuf.createValidateEncode<IFile>();
export const createDecode = typia.protobuf.createDecode<IFile>();
export const createAssertDecode = typia.protobuf.createAssertDecode<IFile>();
export const createIsDecode = typia.protobuf.createIsDecode<IFile>();
export const createValidateDecode = typia.protobuf.createValidateDecode<IFile>();
