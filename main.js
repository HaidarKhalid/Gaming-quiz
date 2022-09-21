const pageDiv = document.getElementById("page")
let wrongTimes = 0;
let correctTimes = 0;
function start(o) {
    if (o == 1) {
        pageDiv.innerHTML = `
        <h2>Question 1 <span style="color: green;">(easy)</span></h2>
        <h1>Which company made grand theft auto</h1>
        <button onclick="wrong(1)">epic games</button> 
    <button onclick="right(1)">Rockstar games</button> 
    <button onclick="wrong(1)">Ubisoft</button>
        `
    } else if (o == 2) {
        pageDiv.innerHTML = `
        <h2>Question 2 <span style="color: green;">(easy)</span></h2>
        <h1>Wich company is the owner of PlayStation </h1>
        <button onclick="right(2)">Sony</button> 
    <button onclick="wrong(2)">Microsoft</button> 
    <button onclick="wrong(2)">Ps</button>
        `
    }  else if (o == 3) {
        pageDiv.innerHTML = `
        <h2>Question 3 <span style="color: green;">(easy)</span></h2>
        <h1>is Fortnite for free?</h1>
        <button onclick="right(3)">Yes it's for free</button> 
    <button onclick="wrong(3)">no it's not for free</button> 
        `
    } else if (o == 4) {
        pageDiv.innerHTML = `
        <h2>Question 4 <span style="color: green;">(easy)</span></h2>
        <h1>what is GOTY mean?</h1>
        <button onclick="wrong(4)">game of the month</button> 
    <button onclick="wrong(4)">game of the young</button> 
    <button onclick="right(4)">game of the year</button>
        `
    } else if (o == 5) {
        pageDiv.innerHTML = `
        <h2>Question 5 <span style="color: green;">(easy)</span></h2>
        <h1>Which year did grand theft auto vi (6) release</h1>
        <button onclick="wrong(5)">2013</button> 
    <button onclick="wrong(5)">2020</button> 
    <button onclick="right(5)">it didn't release yet</button>
        `
    } else if (o == 6) {
        pageDiv.innerHTML = `
        <h2>Question 1 <span style="color: darkorange;">(medium)</span></h2>
        <h1>which year did the PlayStation 5 released?</h1>
        <button onclick="wrong(6)">2019</button> 
    <button onclick="wrong(6)">2021</button> 
    <button onclick="right(6)">2020</button>
        `
    } else if (o == 7) {
        pageDiv.innerHTML = `
        <h2>Question 2 <span style="color: darkorange;">(medium)</span></h2>
        <h1>which year did grand theft auto v (5) release?</h1>
        <button onclick="right(7)">2013</button> 
    <button onclick="wrong(7)">2014</button> 
    <button onclick="wrong(7)">2012</button>
        `
    } else if (o == 8) {
        pageDiv.innerHTML = `
        <h2>Question 3 <span style="color: darkorange;">(medium)</span></h2>
        <h1>what is the most selling gaming device in the world?</h1>
        <button onclick="wrong(8)">PlayStation 4</button> 
    <button onclick="wrong(8)">Xbox 360</button> 
    <button onclick="right(8)">PlayStation 2</button>
        `
    } else if (o == 9) {
        pageDiv.innerHTML = `
        <h2>Question 4 <span style="color: darkorange;">(medium)</span></h2>
        <h1> the most selling game in the world</h1>
        <button onclick="right(9)">Minecraft</button> 
    <button onclick="wrong(9)">Call of duty</button> 
    <button onclick="wrong(9)">Grand theft auto</button>
        `
    } else if (o == 10) {
        pageDiv.innerHTML = `
        <h2>Question 5 <span style="color: darkorange;">(medium)</span></h2>
        <h1> What is the game that embodied the entire globe <br>
        (so that you can see your house from the game) <br>
        and all the landmarks and cities in the world </h1>
        <button onclick="wrong(10)">Forza horizon</button> 
    <button onclick="right(10)">microsoft flight simulator</button> 
    <button onclick="wrong(10)">There is no game did this</button>
        `
    } else if (o == 11) {
        pageDiv.innerHTML = `
        <h2>Question 1 <span style="color: darkred;">(hard)</span></h2>
        <h1>how many gamers are in the world?</h1>
        <button onclick="wrong(11)">less than 200million person</button> 
    <button onclick="wrong(11)">200million - 1billion person</button> 
    <button onclick="right(11)">more than 2B person</button>
        `
    } else if (o == 12) {
        pageDiv.innerHTML = `
        <h2>Question 2 <span style="color: darkred;">(hard)</span></h2>
        <h1>what is the name of the first Xbox?</h1>
        <button onclick="wrong(12)">Just (Xbox)</button> 
    <button onclick="right(12)">Xbox original</button> 
    <button onclick="wrong(12)">Xbox 1</button>
        `
    } else if (o == 13) {
        pageDiv.innerHTML = `
        <h2>Question 3 <span style="color: darkred;">(hard)</span></h2>
        <h1>what is the first gaming device?</h1>
        <button onclick="wrong(13)">atari</button> 
    <button onclick="wrong(13)">Mega Drive/Genesis</button> 
    <button onclick="right(13)">The Odyssey</button>
        `
    } else if (o == 14) {
        pageDiv.innerHTML = `
        <h2>Question 4 <span style="color: darkred;">(hard)</span></h2>
        <h1>How big is the world in Minecraft?</h1>
        <button onclick="right(14)">more than 50 million meter</button> 
    <button onclick="wrong(14)">The same size as the earth</button> 
    <button onclick="wrong(14)">Less than 50million meters</button>
        `
    }  else if (o == 15) {
        pageDiv.innerHTML = `
        <h2>Question 5 <span style="color: darkred;">(hard)</span></h2>
        <h1>How much did PlayStation 1 sell</h1>
        <button onclick="wrong(15)">less than 40million</button> 
    <button onclick="right(15)">more than 80million</button> 
    <button onclick="wrong(15)">40million - 80million</button>
        `
    } else if (o === "end") {
        pageDiv.innerHTML = `<h1 class="end-el">DONE!</h1> <h2>
        Thank you for visiting my site if you want to contact me just <a href="https://www.instagram.com/y_g_v/">click here</a>
        <br> <p>you've got (<span style="color: green;">${correctTimes}</span>) times correct answers and (<span style="color: red;">${wrongTimes}</span>) times wrong answers</p>
        </h2>
        `
    }
    }
function wrong(q) {
    if (q == 1) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br> the company that created grand theft auto is Rockstar games <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">Source</a>  </h1>
        <button onclick="start(2)"> continue </button>
        `
    }    else if (q == 2) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong! </span> <br> the owner of PlayStation is sony <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">Source</a>  </h1>
        <button onclick="start(3)"> continue </button>
        `
    }  else if (q == 3) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>Fortnite is for free <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Fortnite">Source</a></h1>
        <button onclick="start(4)"> continue </button>
        `
    } else if (q == 4) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>GOTY mean : Game of the year<br> <a target="_blank" href="https://www.dictionary.com/e/acronyms/goty/">Source</a></h1>
        <button onclick="start(5)"> continue </button>
        `
    } else if (q == 5) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>Grand theft auto vi (6) didn't release yet<br> <a target="_blank" href="https://www.pcgamesn.com/grand-theft-auto-vi/gta-6-release-date-setting-map-characters-gameplay-trailers">Source</a></h1>
        <button onclick="start(6)"> continue </button>
        `
    } else if (q == 6) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>The playstation 5 release at 2020<br> <a target="_blank" href="https://en.wikipedia.org/wiki/PlayStation_5">Source</a></h1>
        <button onclick="start(7)"> continue </button>
        `
    } else if (q == 7) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>grand theft auto v (5) release at 2013<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto_V">Source</a></h1>
        <button onclick="start(8)"> continue </button>
        `
    } else if (q == 8) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>the most selling gaming device in the world is PlayStation 2<br> <a target="_blank" href="https://www.statista.com/statistics/268966/total-number-of-game-consoles-sold-worldwide-by-console-type/">Source</a></h1>
        <button onclick="start(9)"> continue </button>
        `
    
    } else if (q == 9) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong! </span> <br> the most selling game in the world is Minecraft<br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_video_games">Source</a></h1>
        <button onclick="start(10)"> continue </button>
        `
    
    } else if (q == 10) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>the game that did that is Microsoft flight simulator<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Microsoft_Flight_Simulator">Source</a></h1>
        <button onclick="start(11)"> continue </button>
        `
    
    } else if (q == 11) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span>  <br>There are 3.24 billion gamers in the world today<br> <a target="_blank" href="https://dataprot.net/statistics/gamer-demographics/">Source</a></h1>
        <button onclick="start(12)"> continue </button>
        `
    
    } else if (q == 12) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span> <br>the name of the first xbox is Xbox original<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Xbox#First_generation:_Xbox">Source</a></h1>
        <button onclick="start(13)"> continue </button>
        `
    
    } else if (q == 13) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span> <br>the first gaming device is (The Odyssey)<br> <a target="_blank" href="https://www.computermuseumofamerica.org/2020/06/22/the-first-gaming-console/">Source</a></h1>
        <button onclick="start(14)"> continue </button>
        `
    
    } else if (q == 14) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span> <br>Minecraft world size is 60 million meters <br> <a target="_blank" href="https://www.lifewire.com/how-big-is-a-minecraft-world-5212822">Source</a></h1>
        <button onclick="start(15)"> continue </button>
        `
    
    } else if (q == 15) {
        pageDiv.innerHTML = `
        <h1><span style="color:red;">Wrong!</span> <br>102 million units of the PlayStation 1 have been sold<br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_game_consoles">Source</a></h1>
        <button onclick="start('end')"> continue </button>
        `
    
    }
    wrongTimes += 1
}

function right(r) {
    if (r == 1) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br> the company that created grand theft auto is Rockstar games <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">Source</a>  </h1>
        <button onclick="start(2)"> continue </button>
        `
    } else if (r == 2) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br> the owner of PlayStation is sony <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto">Source</a>  </h1>
        <button onclick="start(3)"> continue </button>
        `
    } else if (r == 3) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br> Fortnite is for free <br> <a target="_blank" href="https://en.wikipedia.org/wiki/Fortnite">Source</a>  </h1>
        <button onclick="start(4)"> continue </button>
        `
    }   else if (r == 4) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>GOTY mean : Game of the year<br> <a target="_blank" href="https://www.dictionary.com/e/acronyms/goty/">Source</a>  </h1>
        <button onclick="start(5)"> continue </button>
        `
    }  else if (r == 5) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct! </span> <br>Grand theft auto vi (6) didn't release yet<br> <a target="_blank" href="https://www.pcgamesn.com/grand-theft-auto-vi/gta-6-release-date-setting-map-characters-gameplay-trailers">Source</a>  </h1>
        <button onclick="start(6)"> continue </button>
        `
    }  else if (r == 6) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>The playstation 5 release at 2020<br> <a target="_blank" href="https://en.wikipedia.org/wiki/PlayStation_5">Source</a>  </h1>
        <button onclick="start(7)"> continue </button>
        `
    }  else if (r == 7) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>grand theft auto v (5) release at 2013<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Grand_Theft_Auto_V">Source</a>  </h1>
        <button onclick="start(8)"> continue </button>
        `
    }  else if (r == 8) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>the most selling gaming device in the world is PlayStation 2<br> <a target="_blank" href="https://www.statista.com/statistics/268966/total-number-of-game-consoles-sold-worldwide-by-console-type/">Source</a></h1>
        <button onclick="start(9)"> continue </button>
        `
    }  else if (r == 9) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br> the most selling game in the world is Minecraft<br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_video_games">Source</a></h1>
        <button onclick="start(10)"> continue </button>
        `
    }  else if (r == 10) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>the game that did that is Microsoft flight simulator<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Microsoft_Flight_Simulator">Source</a></h1>
        <button onclick="start(11)"> continue </button>
        `
    }  else if (r == 11) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>There are 3.24 billion gamers in the world today<br> <a target="_blank" href="https://dataprot.net/statistics/gamer-demographics/">Source</a></h1>
        <button onclick="start(12)"> continue </button>
        `
    } else if (r == 12) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>the name of the first xbox is Xbox original<br> <a target="_blank" href="https://en.wikipedia.org/wiki/Xbox#First_generation:_Xbox">Source</a></h1>
        <button onclick="start(13)"> continue </button>
        `
    } else if (r == 13) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>the first gaming device is (The Odyssey)<br> <a target="_blank" href="https://www.computermuseumofamerica.org/2020/06/22/the-first-gaming-console/">Source</a></h1>
        <button onclick="start(14)"> continue </button>
        `
    }
    else if (r == 14) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>Minecraft world size is 60 million meters <br> <a target="_blank" href="https://www.lifewire.com/how-big-is-a-minecraft-world-5212822">Source</a></h1>
        <button onclick="start(15)"> continue </button>
        `
    } else if (r == 15) {
        pageDiv.innerHTML = `
        <h1><span style="color:green;">Correct!</span>  <br>102 million units of the PlayStation 1 have been sold<br> <a target="_blank" href="https://en.wikipedia.org/wiki/List_of_best-selling_game_consoles">Source</a></h1>
        <button onclick="start('end')"> continue </button>
        `
    }
    correctTimes += 1
}
