export class TextDecoderExtended extends TextDecoder {
  constructor(label?: string, options?: TextDecoderOptions) {
    super(label, options);
  }

  decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions) {
    const result = super.decode(input, options);
    if (result.includes('\uFFFD')) {
      throw new TypeError("The input contains malformed data.");
    }
    return result;
  }
}
