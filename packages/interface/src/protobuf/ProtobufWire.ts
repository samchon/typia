/**
 * Protocol Buffers wire types.
 *
 * `ProtobufWire` defines the wire types used in Protocol Buffers binary
 * encoding. Each type determines how the value is serialized on the wire.
 *
 * Wire types:
 *
 * - {@link VARIANT} (0): Varints (int32, int64, uint32, uint64, sint32, sint64,
 *   bool, enum)
 * - {@link I64} (1): 64-bit (fixed64, sfixed64, double)
 * - {@link LEN} (2): Length-delimited (string, bytes, embedded messages, packed
 *   repeated)
 * - {@link I32} (5): 32-bit (fixed32, sfixed32, float)
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export const enum ProtobufWire {
  /**
   * - Integers
   * - Bool
   * - Enum
   */
  VARIANT = 0,

  /**
   * - Fixed64
   * - Sfixed64
   * - Double
   */
  I64 = 1,

  /**
   * - String
   * - Bytes
   * - Embedded messages
   * - Packed repeated fields
   */
  LEN = 2,

  START_GROUP = 3,

  END_GROUP = 4,

  /**
   * - Fixed
   * - Sfixed32
   * - Float
   */
  I32 = 5,
}
