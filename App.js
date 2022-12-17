import React, { useState } from "react";
import "./styles.css";

const Gb = {
  Horror : [
    { name: "Red Dragon by Thomas Harris ", discription: "The Silence of the Lambs gets all the attention, but the best Hannibal Lecter novel is still the first; a book that suggests the most horrifying of evils can grow from an all too human place, and that even heroes can carry something monstrous inside them. Every Lecter story on some level features an implicit Faustian bargain and none is more tragic than FBI crimimal profiler Will Graham’s knowing choice to sacrifice his own fragile peace of mind to stop a killer he understands all too well." },
    { name: "Horns by Joe Hill", discription: "Sometimes horror, even at its darkest, is the window dressing for something more tender. That’s the case with the unique and entirely enrapturing Horns, a book that starts out as a twisted revenge story before slowly becoming something more sprawling, knotty, and ultimately hopeful. Horns is by turns a gothic romance, a murder mystery, a supernatural thriller and a biting satire on how quick we can be to judge despite the darkness we all harbour." }
  ],
  Adventure: [
    { name: "Moby-Dick by Herman Melville", discription: "Moby-Dick, if you’re not a hermit or have been living under a rock your whole life you must have at least come across hearing about Moby-Dick. Well, if not, here’s a short summary; Moby-Dick is a novel written by the American author Herman Melville which was a turning point of his career as it turned out to be the master-piece of all time. The story is narrated by the sailor, Ishmael who is on board with the obsessive, slightly neurotic Captain Ahab on a quest to find the white whale, Moby-Dick, who has apparently ruined his whole life and now seeks revenge. The characters are brilliantly portrayed as well as the descriptions of the exotic locations with a tinge of dark humor. If you haven’t already read this book I would recommend you to pick up your copy right away." },
    { name: "Odyssey by Homer", discription: "The novel is set about three thousand years ago, although it would be wrong to call it a novel as it is rather an epic poem. Homer has great command over literature, poetry, metaphors and symbolism. It’s based on the ancient Greek sea god Poseidon and the challenges he faces on his return home after twenty years. The ancient Greek history is unraveled and myths and legends retold in this poem. Therefore if you enjoy poetry, literature compositions along with adventure this should be on your list of reads." }
  ],
  Crime: [
    { name: "Burial of Ghostsby Ann Cleeves", discription: "From the author of Shetland, Vera and The Long Call and the creator of their TV adaptations, Ann Cleeves promises a page-turning thriller in her standalone novel, Burial of Ghosts. Following a troubled upbringing, Lizzie Bartholomew seeks escape on a holiday in Morocco, which fellow tourist Philip Samson certainly offers. Little does she know that this affair will have far-reaching consequences. Upon returning to England, a solicitor's letter informs her of Philip's death, and with it a gift of £15,000, forcing Lizzie to confront terrifying secrets from her past . . ." },
    { name: "The Cat Who Caught a Killerby L T Shearer", discription: "Essential reading for Richard Osman and S. J. Bennet fans, and all those who love their crime cosy. Follow Lulu Lewis as she seeks to resolve the suspicious death of her mother-in-law, Emily, in L T Shearer's gripping whodunit. As a former police detective fraught with grief following the death of her husband, Lulu's retirement is turned upside-down when Emily dies. However, Lulu's not alone. Amidst her quest for answers is Conrad, a remarkable cat who is with her every step of the way." }
  ]
};

export default function App() {
  var [selectedgenre, setGenre] = useState("Horror");
  var styling = {
    backgroundColor: "yellow",
    width: "30%",
    padding: "2rem",
    borderRadius: "2rem",
    marginLeft: "auto",
    marginRight: "auto"
  };
  function catchaclick(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 style={styling}> 📚Good Books</h1>
      <p>You can checkout my favourite book collection.</p>
      {Object.keys(Gb).map((genre) => {
        return (
          <button
            style={{
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "0.5rem",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            onClick={() => catchaclick(genre)}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {Gb[selectedgenre].map((movie) => {
            return (
              <li
                keys={movie.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid white",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "navy",
                  color: "white"
                }}
              >
                <div><h3>{movie.name}</h3></div>
                <div>{movie.discription}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
