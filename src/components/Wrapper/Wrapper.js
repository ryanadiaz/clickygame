import React, {Component} from "react";
import "./Wrapper.css";
import ClickyCard from "../ClickyCard/";
import clickycards from "../../clickycards.json";

class Wrapper extends Component {
    state = {   // this.state.clickycards = the clickycards json array
        clickycards,
        clicked: [],
        score: 0,
        highScore: 0,
        helpText: "Click an image to begin!"
    }

    handleClick(idClicked) {
        console.log('idClicked: ', idClicked);

        if (this.state.clicked.includes(idClicked)) {
            console.log("true");

            let currentScore = this.state.score > this.state.highScore ? this.state.score : this.state.highScore

            this.setState({
                clicked: [],
                score: 0,
                highScore: currentScore,
                helpText: "Game Over! You already clicked that one."
            });
        } else {
            console.log('false');

            let currentScore = this.state.score >= this.state.highScore ? this.state.score + 1 : this.state.highScore

            if (currentScore === 10) {
                this.setState({
                    clicked: this.state.clicked,
                    score: 0,
                    highScore: currentScore,
                    helpText: "You win! Thanks for playing."
                });
            } else {
                this.setState({
                    clicked: this.state.clicked,
                    score: this.state.score + 1,
                    highScore: currentScore,
                    helpText: "You guessed correctly!"
                });
            }
        }
        this.state.clicked.push(idClicked);
    }

    shuffle(cards) {
        let counter = cards.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = cards[counter];
            cards[counter] = cards[index];
            cards[index] = temp;
        }
    
        return cards;
    }

    render () {
        // const shuffledCards = this.shuffle(this.state.clickycards);
        // console.log(shuffledCards)
        return (
            <div className="grid-container">

                <nav>
                    <h1>Clicky Game!</h1>
                    <h1 style={ { color: this.state.helpText === "Game Over! You already clicked that one." ? 'red' : 'white' } }>{this.state.helpText}</h1>
                    <h1>Score: {this.state.score} | Top Score: {this.state.highScore}</h1>
                </nav>

                <header>
                    <h1>Clicky Game</h1>
                    <h3>Click on an image to earn points, but don't click on any image more than once!</h3>
                </header>

                <section>
                    {this.shuffle(this.state.clickycards).map((card, index) => (   // create array of all clickycards, render component for each card
                        <ClickyCard
                            key={index}
                            id={card.id}
                            name={card.name}
                            image={card.image}
                            clicked={card.clicked}
                            handleClick={this.handleClick.bind(this)}
                        />
                    ))}
                </section>

                <footer>
                    <h4>Clicky Game!</h4>
                </footer>

            </div>
        )
    };
  }



export default Wrapper;
