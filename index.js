import express from "express";
import path from "path";

const __dirname = path.resolve(path.dirname(""));
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const port = 3001;
app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
let message = "";
let pokemons = [
  {
    numero: 1,
    nome: "Bulbasaur",
    tipo: "Grass",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    altura: "0.7 m",
    peso: "6.9 kg",
    categoria: "Seed",
    habilidade: "Overgrow",
  },
  {
    numero: 2,
    nome: "Charmander",
    tipo: "Fire",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura: "0.6 m",
    peso: "8.5 kg",
    categoria: "Lizard",
    habilidade: "Blaze",
  },
  {
    numero: 3,
    nome: "Squirtle ",
    tipo: "Water",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    habilidade: "Torrent",
  },
];
app.get("/", (req, res) => {
  res.render("index.ejs", {
    pokemons,
    message,
  });
  message = "";
});
app.get("/cadastro", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("cadastro.ejs", {
    pokemons,
  });
});

app.get("/detalhes/:id", (req, res) => {
  let pokemon = [];
  pokemons.filter((element) => {
    if (element.numero === +req.params.id) {
      pokemon.push(element);
    }
  });
  res.render("detalhes.ejs", {
    pokemon,
  });
});
app.post("/cadastro", (req, res) => {
  const pokemon = req.body;
  pokemon.numero = pokemons.length + 1;
  pokemons.push(pokemon);
  message = ".";
  res.redirect("/");
});
var porta = process.env.PORT || 8080;
app.listen(porta);