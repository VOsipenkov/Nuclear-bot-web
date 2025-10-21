class GotService {
  async getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    let some = await res.json();
    return some;
  }

  getAllCharaters(){
    return this.getResource('https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10');
  }

  getCharacter(id){
    return this.getResource(`https://www.anapioficeandfire.com/api/characters/${id}`);
  }
}

const got = new GotService();

got.getAllCharaters().then(response=>console.log(response));
got.getCharacter(130).then(response=>console.log(response));