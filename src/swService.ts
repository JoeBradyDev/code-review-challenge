type Character = {
  name: string;
};

let cache: Character;

export const getCharacter = (cb: (data: Character) => void) => {
  if (cache) {
    cb(cache);
  } else {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => {
        cache = data;
        cb(data);
      });
  }
};
