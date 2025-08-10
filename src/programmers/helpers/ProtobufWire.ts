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
   * - Mebedded messages
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
