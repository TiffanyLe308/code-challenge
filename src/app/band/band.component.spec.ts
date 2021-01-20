import { expectedBands, Plays } from './band.component';

describe('test something', () => {
  it('should contains required fields', () => {
    const bands = expectedBands();

    expect(bands.current).not.toBeUndefined();
    expect(bands.past).not.toBeUndefined();
    expect(bands.all).not.toBeUndefined();
    expect(bands.plays).not.toBeUndefined();
  });
  it('should have name ASCENDING', () => {
    const bands = expectedBands();
    const expectedList = [
      'sascha',
      'gunter',
      'raymond',
      'steve',
      'jules',
      'en',
      'lucia',
    ];

    expect(bands.all.length).toEqual(7);
    for (let i = 0; i < expectedList.length; i++) {
      const expectedName = expectedList[i];
      expect(expectedName).toEqual(bands.all[i]);
    }
  });
  it('should have correct keys in plays object', () => {
    const expectedPlays: Plays = {
      vocals: ['sascha', 'lucia', 'raymond', 'en'],
      synth: ['sascha', 'lucia', 'jules', 'raymond', 'en', 'gunter'],
      guitar: ['sascha', 'jules', 'steve', 'en', 'gunter'],
      bass: ['sascha', 'jules'],
      drums: ['en'],
    };
    const bands = expectedBands();

    for (let i = 0; i < Object.keys(expectedPlays).length; i++) {
      const playField = Object.keys(expectedPlays)[i];
      expect(Object.keys(bands.plays)).toContain(playField);
      expect(expectedPlays[playField].length).toEqual(
        bands.plays[playField].length
      );
    }
  });
});
