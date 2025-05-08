import typia from "typia";
 
export interface CommentTagExample {
  /**
   * @type int32
   */
  int32: number;
 
  /**
   * @type uint32
   */
  uint32?: number | null;
 
  /**
   * @type uint64
   */
  uint64?: number;
 
  /**
   * @type int64
   */
  int64: number;
 
  /**
   * @type float
   */
  float: number | null;
 
  double: number;
 
  string: string;
}
 
//----
// PROTOBUF MESSAGE SCHEMA
//----
typia.protobuf.message<CommentTagExample>();
 
//----
// DECODE FUNCTION
//----
typia.protobuf.createDecode<CommentTagExample>();
 
//----
// ENCODE FUNCTION
//----
typia.protobuf.createEncode<CommentTagExample>();