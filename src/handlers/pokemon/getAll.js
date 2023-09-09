const getAllPokemons = require("../../controllers_utils/ApiControllers/getAllPokemons");
const getAllPokemonsDb = require("../../controllers_utils/DbControllers/pokemonDb/getAllPokemonsDb");

module.exports = async (req, res) => {
  try {
    const allPokemons = await getAllPokemons();
    // const allPokemonsDb = await getAllPokemonsDb();
    // return res.status(200).json([...allPokemons]);
    res.send('<h2>ALL POKEMONS ROUTE</h2>')
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
