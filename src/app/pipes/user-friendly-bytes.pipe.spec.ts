import { UserFriendlyBytesPipe } from './user-friendly-bytes.pipe';

describe('UserFriendlyBytesPipe', () => {
  it('create an instance', () => {
    const pipe = new UserFriendlyBytesPipe();
    expect(pipe).toBeTruthy();
  });
});
