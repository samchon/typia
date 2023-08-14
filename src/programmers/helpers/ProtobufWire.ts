export const enum ProtobufWire {
    /**
     * integers
     * bool
     * enum
     */
    VARINT = 0,

    /**
     * fixed64
     * sfixed64
     * double
     */
    I64 = 1,

    /**
     * string
     * bytes
     * mebedded messages
     * packed repeated fields
     */
    LEN = 2,

    /**
     * fixed, sfixed32, float
     */
    I32 = 5,
}
