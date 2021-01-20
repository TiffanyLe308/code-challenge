export interface Player {
  name: string;
  age: number;
  plays: string[];
}

export interface Member {
  current: Player[];
  past: Player[];
}

export interface Band {
  members: Member;
}
export type Plays = { [instrument: string]: string[] };
export interface ExpectedBand extends Member {
  plays: Plays;
  all: string[];
}

const band: Band = {
  members: {
    current: [
      { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
      { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
      { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
      { name: 'Steve', age: 55, plays: ['guitar'] },
    ],
    past: [
      { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
      { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
      { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] },
    ],
  },
};

export const expectedBands = (): ExpectedBand => {
  const members = [...band.members.current, ...band.members.past];
  const allMembers = members
    .sort((a, b) => {
      return b.age - a.age || a.name.localeCompare(b.name);
    })
    .map((member) => member.name.toLowerCase());

  const flatPlays = Array.from(
    new Set(members.map((member) => member.plays).flat())
  );

  let plays: Plays = {};
  for (let i = 0; i < members.length; i++) {
    for (let j = 0; j < flatPlays.length; j++) {
      const instrument = flatPlays[j];

      const { plays: memberPlays, name } = members[i];
      if (memberPlays.includes(instrument)) {
        if (!plays[instrument]) {
          plays[instrument] = [name.toLowerCase()];
        } else {
          plays[instrument].push(name.toLowerCase());
        }
      }
    }
  }

  const originalExpected: ExpectedBand = {
    ...band.members,
    all: allMembers,
    plays,
  };

  return originalExpected;
};
